<?php

	class UserPrefs extends GlobalSettings {
		protected static
			$_db = 'user_prefs',
			$_defaults = array(
				'cg_itemsperpage' => 7,
				'cg_hidesynon' => 0,
				'cg_hideclrinfo' => 0,
				'p_vectorapp' => '',
				'p_hidediscord' => 0,
			);

		/**
		 * Gets a user preference item's value
		 *
		 * @param string $key
		 * @param string $for
		 *
		 * @return mixed
		 */
		static function Get($key, $for = null){
			global $Database, $signedIn, $currentUser;
			if (empty($for))
				$for = $currentUser['id'];

			if (isset(User::$_PREF_CACHE[$for][$key]))
				return User::$_PREF_CACHE[$for][$key];

			$default = null;
			if (isset(static::$_defaults[$key]))
				$default = static::$_defaults[$key];
			if (!$signedIn)
				return $default;

			$Database->where('user', $for);
			return User::$_PREF_CACHE[$for][$key] = parent::Get($key, $default);
		}

		/**
		 * Sets a preference item's value
		 *
		 * @param string $key
		 * @param mixed  $value
		 * @param string $for
		 *
		 * @return bool
		 */
		static function Set($key, $value, $for = null){
			global $Database, $signedIn, $currentUser;
			if (empty($for))
				$for = $currentUser['id'];

			if (!isset(static::$_defaults[$key]))
				CoreUtils::Respond("Key $key is not allowed");
			$default = static::$_defaults[$key];

			if ($Database->where('key', $key)->where('user', $currentUser['id'])->has(static::$_db)){
				$Database->where('key', $key)->where('user', $currentUser['id']);
				if ($value == $default)
					return $Database->delete(static::$_db);
				else return $Database->update(static::$_db, array('value' => $value));
			}
			else if ($value != $default)
				return $Database->insert(static::$_db, array('user' => $currentUser['id'], 'key' => $key, 'value' => $value));
			else return true;
		}

		/**
		 * Processes a preference item's new value
		 *
		 * @param string $key
		 *
		 * @return mixed
		 */
		static function Process($key){
			$value = isset($_POST['value']) ? CoreUtils::Trim($_POST['value']) : null;

			switch ($key){
				case "cg_itemsperpage":
					$thing = 'Color Guide items per page';
					if (!is_numeric($value))
						throw new Exception("$thing must be a number");
					$value = intval($value, 10);
					if ($value < 7 || $value > 20)
						throw new Exception("$thing must be between 7 and 20");
				break;
				case "p_hidediscord":
				case "cg_hidesynon":
				case "cg_hideclrinfo":
					$value = $value ? 1 : 0;
				break;
			}

			return $value;
		}
	}
