# NoZygisk's No Wheel

World's simplest general purpose root module.

## Features

- C99
- Traceless
- Low complexity

## Requirements

- API compliant KernelSU 
- NoZygisk 554 or higher
- Android 7.1 or higher

## Support

> [!WARNING]
> You have absolutely NO support since this is for personal usage :)

## Usage

The only feature of No Wheel that requires setup is RVU (ReVanced Umount). ReVanced modules MUST include a `no_config` file in their module folder with the following content:

```properties
module_type=revanced
allow_umount=true
```

Which will allow No Wheel to enumerate the amount of ReVanced modules -- hence amount of mounts it should find -- and umount them.

## License

No Wheel is licensed under [AGPLv3 License](LICENSE). You can read more about it on [Open Source Initiative](https://opensource.org/licenses/AGPL-3.0).

* This project is considered as: [leading standard](https://github.com/PerformanC/contributing?tab=readme-ov-file#project-information).
