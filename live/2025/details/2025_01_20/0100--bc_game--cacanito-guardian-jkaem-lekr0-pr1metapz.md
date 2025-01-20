### Roster Details<br />
Team Name: BC.Game<br />
Roster: CacaNito, GuardiaN, jkaem, Lekr0, pr1metapz<br />
Global Rank: [100](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [72]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  867.5<br />
<br />
Final Rank Value (867.5) = Starting Rank Value (869.8) + Head To Head Adjustments (-2.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.435[<sup>1</sup>](#table2)
- Bounty Collected: 0.337[<sup>2</sup>](#table1)
- Opponent Network: 0.174[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.237<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 869.8
- 400 + ( ( 0.237 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 869.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |      146 | 2024-12-19 | AMKAL             | L   | 0.990      | -            | -                | -                | -         |   -15.68 | CacaNito, GuardiaN, jkaem, Lekr0, pr1metapz   |
|           35 |      394 | 2024-12-05 | GenOne            | W   | 0.897      | 0.333        | 0.019 (0.006)    | 0.580 (0.173)    | 0 (0.000) |    12.36 | CacaNito, GuardiaN, jkaem, Lekr0, pr1metapz   |
|           34 |      425 | 2024-12-04 | Illuminar         | W   | 0.891      | 0.333        | 0.018 (0.005)    | 0.483 (0.143)    | 0 (0.000) |    14.49 | CacaNito, GuardiaN, jkaem, Lekr0, pr1metapz   |
|           33 |      426 | 2024-12-04 | GenOne            | L   | 0.891      | -            | -                | -                | -         |   -14.93 | CacaNito, GuardiaN, jkaem, Lekr0, pr1metapz   |
|           32 |      447 | 2024-12-03 | GenOne            | L   | 0.883      | -            | -                | -                | -         |   -16.21 | CacaNito, GuardiaN, jkaem, Lekr0, pr1metapz   |
|           31 |      459 | 2024-12-02 | FLuffy Gangsters  | L   | 0.878      | -            | -                | -                | -         |   -18.63 | CacaNito, GuardiaN, jkaem, Lekr0, pr1metapz   |
|           30 |      464 | 2024-12-02 | FORZE Reload      | L   | 0.877      | -            | -                | -                | -         |   -19.97 | CacaNito, GuardiaN, jkaem, Lekr0, pr1metapz   |
|           29 |      476 | 2024-12-01 | kONO              | W   | 0.872      | 0.372        | 0.046 (0.015)    | 0.747 (0.243)    | 0 (0.000) |    11.95 | CacaNito, GuardiaN, jkaem, Lekr0, pr1metapz   |
|           28 |      479 | 2024-12-01 | Illuminar         | W   | 0.871      | 0.333        | 0.018 (0.005)    | 0.483 (0.140)    | 0 (0.000) |    13.24 | CacaNito, GuardiaN, jkaem, Lekr0, pr1metapz   |
|           27 |      513 | 2024-11-30 | GUN5              | L   | 0.863      | -            | -                | -                | -         |    -7.01 | CacaNito, GuardiaN, jkaem, Lekr0, pr1metapz   |
|           26 |      538 | 2024-11-29 | kONO              | W   | 0.858      | 0.333        | 0.046 (0.013)    | 0.747 (0.214)    | 0 (0.000) |    13.38 | CacaNito, GuardiaN, jkaem, Lekr0, pr1metapz   |
|           25 |      539 | 2024-11-29 | Gaimin Gladiators | W   | 0.857      | 0.333        | 0.080 (0.023)    | 0.875 (0.250)    | 0 (0.000) |    18.21 | CacaNito, GuardiaN, jkaem, Lekr0, pr1metapz   |
|           24 |      545 | 2024-11-28 | 500               | L   | 0.853      | -            | -                | -                | -         |    -7.25 | CacaNito, GuardiaN, jkaem, Lekr0, pr1metapz   |
|           23 |      560 | 2024-11-27 | Viperio           | W   | 0.846      | -            | -                | -                | 0 (0.000) |     5.54 | CacaNito, GuardiaN, jkaem, Lekr0, pr1metapz   |
|           22 |      566 | 2024-11-27 | Aurora Young Blud | W   | 0.844      | 0.333        | 0.045 (0.013)    | 0.837 (0.235)    | 0 (0.000) |    16.45 | CacaNito, GuardiaN, jkaem, Lekr0, pr1metapz   |
|           21 |      593 | 2024-11-25 | L&G               | W   | 0.830      | 0.333        | 0.058 (0.016)    | 0.568 (0.157)    | 0 (0.000) |    14.23 | CacaNito, GuardiaN, jkaem, Lekr0, pr1metapz   |
|           20 |      633 | 2024-11-23 | GenOne            | W   | 0.818      | 0.333        | 0.019 (0.005)    | 0.580 (0.158)    | 0 (0.000) |    12.06 | CacaNito, GuardiaN, jkaem, pr1metapz, Woro2k  |
|           19 |      793 | 2024-11-15 | FLuffy Gangsters  | L   | 0.765      | -            | -                | -                | -         |   -15.44 | CacaNito, GuardiaN, jkaem, Lekr0, pr1metapz   |
|           18 |      900 | 2024-11-12 | WW                | W   | 0.745      | -            | -                | -                | -         |     3.87 | CacaNito, GuardiaN, jkaem, Lekr0, pr1metapz   |
|           17 |      937 | 2024-11-11 | Aurora Young Blud | L   | 0.738      | -            | -                | -                | -         |    -9.26 | CacaNito, GuardiaN, jkaem, Lekr0, pr1metapz   |
|           16 |     2597 | 2024-09-08 | K27               | L   | 0.312      | -            | -                | -                | -         |    -8.22 | anarkez, CacaNito, GuardiaN, Lekr0, pr1metapz |
|           15 |     2770 | 2024-09-03 | RUBY              | L   | 0.278      | -            | -                | -                | -         |    -7.42 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz  |
|           14 |     3178 | 2024-08-23 | TSM               | L   | 0.203      | -            | -                | -                | -         |    -3.13 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz  |
|           13 |     3204 | 2024-08-22 | GamerLegion       | L   | 0.197      | -            | -                | -                | -         |    -3.64 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz  |
|           12 |     3248 | 2024-08-21 | HEROIC            | L   | 0.191      | -            | -                | -                | -         |    -0.91 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz  |
|           11 |     3270 | 2024-08-21 | ECLOT             | W   | 0.191      | 0.143        | 0.286 (0.008)    | 1.000 (0.027)    | -         |     5.58 | anarkez, CacaNito, KWERTZZ, Lekr0, pr1metapz  |
|           10 |     3781 | 2024-08-04 | B8                | L   | 0.079      | -            | -                | -                | -         |    -0.48 | anarkez, CacaNito, Lekr0, pr1metapz, REDSTAR  |
|            9 |     3795 | 2024-08-04 | RUSH B            | W   | 0.078      | -            | -                | -                | -         |     1.28 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            8 |     3826 | 2024-08-03 | ARCRED            | W   | 0.072      | -            | -                | -                | -         |     0.85 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            7 |     3860 | 2024-08-02 | SovvyKiNG         | W   | 0.065      | -            | -                | -                | -         |     0.31 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            6 |     3899 | 2024-08-01 | Sampi             | W   | 0.058      | -            | -                | -                | -         |     1.21 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            5 |     3993 | 2024-07-30 | EYEBALLERS        | W   | 0.045      | -            | -                | -                | -         |     0.69 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            4 |     4045 | 2024-07-28 | los kogutos       | L   | 0.033      | -            | -                | -                | -         |    -0.14 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            3 |     4106 | 2024-07-26 | GUN5              | W   | 0.018      | -            | -                | -                | -         |     0.44 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            2 |     4151 | 2024-07-25 | SAW               | L   | 0.011      | -            | -                | -                | -         |    -0.02 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |
|            1 |     4175 | 2024-07-24 | 1WIN              | L   | 0.006      | -            | -                | -                | -         |    -0.14 | anarkez, CacaNito, joel, Lekr0, pr1metapz     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,067.12)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-05 |      0.897 | $6,000.00      | $5,382.04       |
| 2024-11-29 |      0.857 | $6,000.00      | $5,141.74       |
| 2024-08-04 |      0.078 | $7,000.00      | $543.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
