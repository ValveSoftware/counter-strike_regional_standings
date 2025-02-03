### Roster Details<br />
Team Name: Anonymo<br />
Roster: chudy, darchevile, Enzo, Michat, Nami<br />
Global Rank: [142](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [98]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  749.4<br />
<br />
Final Rank Value (749.4) = Starting Rank Value (820.9) + Head To Head Adjustments (-71.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.458[<sup>1</sup>](#table2)
- Bounty Collected: 0.310[<sup>2</sup>](#table1)
- Opponent Network: 0.099[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.217<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 820.9
- 400 + ( ( 0.217 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 820.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      373 | 2025-01-07 | CS2News          | L   | 1.000      | -            | -                | -                | -         |   -23.55 | chudy, darchevile, Enzo, Michat, Nami     |
|           33 |      383 | 2025-01-04 | Insilio          | L   | 0.999      | -            | -                | -                | -         |   -17.50 | chudy, darchevile, Enzo, Michat, Nami     |
|           32 |      393 | 2024-12-29 | BRUTE            | W   | 0.958      | 0.143        | -                | 0.104 (0.014)    | 0 (0.000) |    11.54 | Bambosh, chudy, darchevile, Nami, next1me |
|           31 |      408 | 2024-12-27 | 9INE             | L   | 0.944      | -            | -                | -                | -         |    -6.47 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           30 |      443 | 2024-12-21 | Astralis Talent  | L   | 0.906      | -            | -                | -                | -         |   -16.43 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           29 |      449 | 2024-12-20 | Monte Gen        | L   | 0.900      | -            | -                | -                | -         |   -12.42 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           28 |      456 | 2024-12-20 | ALASKA           | L   | 0.898      | -            | -                | -                | -         |   -12.76 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           27 |      458 | 2024-12-19 | FLuffy Gangsters | W   | 0.894      | 0.333        | 0.015 (0.004)    | 0.608 (0.181)    | 0 (0.000) |    11.34 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           26 |      486 | 2024-12-17 | kONO             | W   | 0.880      | 0.333        | 0.048 (0.014)    | 0.600 (0.176)    | 0 (0.000) |    14.86 | chudy, darchevile, Enzo, Melavi, Nami     |
|           25 |      762 | 2024-12-03 | Illuminar        | L   | 0.786      | -            | -                | -                | -         |   -11.15 | chudy, darchevile, Enzo, Melavi, Nami     |
|           24 |      782 | 2024-12-02 | Apogee           | W   | 0.779      | 0.333        | 0.027 (0.007)    | 0.634 (0.165)    | 0 (0.000) |    16.53 | chudy, darchevile, Enzo, Melavi, Nami     |
|           23 |      803 | 2024-12-01 | GenOne           | L   | 0.771      | -            | -                | -                | -         |   -12.51 | chudy, darchevile, Enzo, Melavi, Nami     |
|           22 |      874 | 2024-11-28 | ENCE Academy     | W   | 0.752      | 0.333        | 0.014 (0.004)    | 0.283 (0.071)    | 0 (0.000) |    10.38 | chudy, darchevile, Enzo, Melavi, Nami     |
|           21 |     1067 | 2024-11-17 | L&G              | L   | 0.679      | -            | -                | -                | -         |    -9.24 | chudy, darchevile, Enzo, ex1st, Nami      |
|           20 |     1095 | 2024-11-16 | Kubix            | L   | 0.673      | -            | -                | -                | -         |    -9.95 | chudy, darchevile, Melavi, Nami, yvro     |
|           19 |     1170 | 2024-11-14 | L&G              | W   | 0.658      | 0.333        | 0.059 (0.013)    | 0.570 (0.125)    | 0 (0.000) |    11.47 | chudy, darchevile, Enzo, ex1st, Nami      |
|           18 |     1285 | 2024-11-10 | GenOne           | W   | 0.632      | 0.333        | 0.020 (0.004)    | 0.618 (0.130)    | 0 (0.000) |     9.78 | chudy, darchevile, Enzo, ex1st, Nami      |
|           17 |     1383 | 2024-11-04 | Haspers          | W   | 0.594      | 0.366        | 0.029 (0.006)    | -                | 0 (0.000) |     4.65 | chudy, darchevile, Melavi, Nami, yvro     |
|           16 |     1512 | 2024-10-29 | Illuminar        | W   | 0.554      | 0.366        | 0.018 (0.004)    | 0.486 (0.099)    | 0 (0.000) |    11.48 | chudy, darchevile, Melavi, Nami, yvro     |
|           15 |     2103 | 2024-10-03 | Heimo            | L   | 0.377      | -            | -                | -                | -         |    -7.09 | darchevile, Enzo, ex1st, morelz, Nami     |
|           14 |     2139 | 2024-10-02 | Illuminar        | L   | 0.371      | -            | -                | -                | -         |    -3.94 | chudy, darchevile, Enzo, morelz, Nami     |
|           13 |     2323 | 2024-09-27 | Kosovo           | L   | 0.338      | -            | -                | -                | -         |    -8.50 | chudy, darchevile, Melavi, Nami, yvro     |
|           12 |     2366 | 2024-09-26 | AMKAL            | L   | 0.331      | -            | -                | -                | -         |    -6.78 | chudy, darchevile, Melavi, Nami, yvro     |
|           11 |     2468 | 2024-09-24 | UNiTY            | L   | 0.318      | -            | -                | -                | -         |    -3.75 | chudy, darchevile, Enzo, Nami, yvro       |
|           10 |     2577 | 2024-09-20 | moneyF           | L   | 0.291      | -            | -                | -                | -         |    -4.08 | chudy, darchevile, Enzo, Nami, yvro       |
|            9 |     2935 | 2024-09-07 | Daystar          | L   | 0.207      | -            | -                | -                | -         |    -4.54 | chudy, darchevile, Enzo, Nami, yvro       |
|            8 |     3079 | 2024-09-03 | Endpoint         | L   | 0.180      | -            | -                | -                | -         |    -2.85 | chudy, darchevile, Enzo, Nami, yvro       |
|            7 |     3319 | 2024-08-27 | ex-Enterprise    | L   | 0.132      | -            | -                | -                | -         |    -2.13 | chudy, darchevile, Enzo, Nami, yvro       |
|            6 |     3447 | 2024-08-25 | ALASKA           | W   | 0.117      | 0.371        | 0.052 (0.002)    | 0.494 (0.022)    | 0 (0.000) |     2.36 | chudy, darchevile, Enzo, Nami, yvro       |
|            5 |     3494 | 2024-08-23 | Chimera          | L   | 0.105      | -            | -                | -                | -         |    -1.22 | chudy, darchevile, Enzo, Nami, yvro       |
|            4 |     3601 | 2024-08-21 | Illuminar        | W   | 0.091      | -            | -                | -                | -         |     0.77 | chudy, darchevile, Enzo, Nami, yvro       |
|            3 |     3658 | 2024-08-19 | GUN5             | L   | 0.079      | -            | -                | -                | -         |    -0.56 | chudy, darchevile, Enzo, Nami, yvro       |
|            2 |     3706 | 2024-08-17 | GUN5             | L   | 0.066      | -            | -                | -                | -         |    -0.47 | chudy, darchevile, Enzo, Nami, yvro       |
|            1 |     3768 | 2024-08-15 | ALTERNATE aTTaX  | W   | 0.051      | 0.371        | 0.066 (0.001)    | 0.643 (0.012)    | -         |     1.26 | chudy, darchevile, Enzo, Nami, yvro       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,443.63)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      0.906 | $1,000.00      | $905.91         |
| 2024-11-17 |      0.679 | $3,000.00      | $2,036.35       |
| 2024-11-16 |      0.673 | $14,125.00     | $9,501.37       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
