### Roster Details<br />
Team Name: Anonymo<br />
Roster: chudy, darchevile, Enzo, Michat, Nami<br />
Global Rank: [132](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [97]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  765.7<br />
<br />
Final Rank Value (765.7) = Starting Rank Value (840.3) + Head To Head Adjustments (-74.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.456[<sup>1</sup>](#table2)
- Bounty Collected: 0.318[<sup>2</sup>](#table1)
- Opponent Network: 0.114[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.222<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 840.3
- 400 + ( ( 0.222 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 840.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |       43 | 2025-01-07 | CS2News           | L   | 1.000      | -            | -                | -                | -         |   -23.93 | chudy, darchevile, Enzo, Michat, Nami     |
|           33 |       53 | 2025-01-04 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -16.18 | chudy, darchevile, Enzo, Michat, Nami     |
|           32 |       63 | 2024-12-29 | BRUTE             | W   | 1.000      | 0.143        | -                | 0.091 (0.013)    | 0 (0.000) |    12.03 | Bambosh, chudy, darchevile, Nami, next1me |
|           31 |       78 | 2024-12-27 | 9INE              | L   | 1.000      | -            | -                | -                | -         |    -6.44 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           30 |      113 | 2024-12-21 | Astralis Talent   | L   | 1.000      | -            | -                | -                | -         |   -18.24 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           29 |      119 | 2024-12-20 | Monte Gen         | L   | 1.000      | -            | -                | -                | -         |   -13.01 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           28 |      126 | 2024-12-20 | Verdant           | L   | 1.000      | -            | -                | -                | -         |   -14.54 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           27 |      128 | 2024-12-19 | FLuffy Gangsters  | W   | 1.000      | 0.333        | 0.015 (0.005)    | 0.588 (0.196)    | 0 (0.000) |    12.56 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           26 |      156 | 2024-12-17 | kONO              | W   | 0.992      | 0.333        | 0.045 (0.015)    | 0.739 (0.244)    | 0 (0.000) |    17.02 | chudy, darchevile, Enzo, Melavi, Nami     |
|           25 |      432 | 2024-12-03 | Illuminar         | L   | 0.898      | -            | -                | -                | -         |   -12.14 | chudy, darchevile, Enzo, Melavi, Nami     |
|           24 |      452 | 2024-12-02 | Apogee            | W   | 0.891      | 0.333        | 0.025 (0.007)    | 0.411 (0.122)    | 0 (0.000) |    19.00 | chudy, darchevile, Enzo, Melavi, Nami     |
|           23 |      473 | 2024-12-01 | GenOne            | L   | 0.884      | -            | -                | -                | -         |   -14.38 | chudy, darchevile, Enzo, Melavi, Nami     |
|           22 |      544 | 2024-11-28 | ENCE Academy      | W   | 0.865      | 0.333        | 0.014 (0.004)    | 0.285 (0.082)    | 0 (0.000) |    12.06 | chudy, darchevile, Enzo, Melavi, Nami     |
|           21 |      737 | 2024-11-17 | L&G               | L   | 0.791      | -            | -                | -                | -         |   -10.44 | chudy, darchevile, Enzo, ex1st, Nami      |
|           20 |      765 | 2024-11-16 | Kubix             | L   | 0.785      | -            | -                | -                | -         |   -11.43 | chudy, darchevile, Melavi, Nami, yvro     |
|           19 |      840 | 2024-11-14 | L&G               | W   | 0.771      | 0.333        | 0.058 (0.015)    | 0.566 (0.145)    | 0 (0.000) |    13.64 | chudy, darchevile, Enzo, ex1st, Nami      |
|           18 |      955 | 2024-11-10 | GenOne            | W   | 0.744      | 0.333        | 0.019 (0.005)    | 0.573 (0.142)    | 0 (0.000) |    11.36 | chudy, darchevile, Enzo, ex1st, Nami      |
|           17 |     1053 | 2024-11-04 | Haspers           | W   | 0.706      | 0.366        | 0.029 (0.008)    | -                | 0 (0.000) |     5.33 | chudy, darchevile, Melavi, Nami, yvro     |
|           16 |     1182 | 2024-10-29 | Illuminar         | W   | 0.666      | 0.366        | 0.018 (0.004)    | 0.481 (0.117)    | 0 (0.000) |    14.68 | chudy, darchevile, Melavi, Nami, yvro     |
|           15 |     1773 | 2024-10-03 | Heimo             | L   | 0.490      | -            | -                | -                | -         |    -9.25 | darchevile, Enzo, ex1st, morelz, Nami     |
|           14 |     1809 | 2024-10-02 | Illuminar         | L   | 0.484      | -            | -                | -                | -         |    -4.34 | chudy, darchevile, Enzo, morelz, Nami     |
|           13 |     1993 | 2024-09-27 | Kosovo            | L   | 0.450      | -            | -                | -                | -         |   -11.17 | chudy, darchevile, Melavi, Nami, yvro     |
|           12 |     2036 | 2024-09-26 | DMS               | L   | 0.444      | -            | -                | -                | -         |    -8.45 | chudy, darchevile, Melavi, Nami, yvro     |
|           11 |     2138 | 2024-09-24 | UNiTY             | L   | 0.430      | -            | -                | -                | -         |    -4.37 | chudy, darchevile, Enzo, Nami, yvro       |
|           10 |     2247 | 2024-09-20 | Into the Breach   | L   | 0.404      | -            | -                | -                | -         |    -5.02 | chudy, darchevile, Enzo, Nami, yvro       |
|            9 |     2605 | 2024-09-07 | Daystar           | L   | 0.320      | -            | -                | -                | -         |    -6.94 | chudy, darchevile, Enzo, Nami, yvro       |
|            8 |     2749 | 2024-09-03 | Endpoint          | L   | 0.293      | -            | -                | -                | -         |    -4.29 | chudy, darchevile, Enzo, Nami, yvro       |
|            7 |     2989 | 2024-08-27 | ex-Enterprise     | L   | 0.245      | -            | -                | -                | -         |    -3.60 | chudy, darchevile, Enzo, Nami, yvro       |
|            6 |     3117 | 2024-08-25 | Verdant           | W   | 0.230      | 0.371        | 0.050 (0.004)    | 0.423 (0.036)    | 0 (0.000) |     4.70 | chudy, darchevile, Enzo, Nami, yvro       |
|            5 |     3164 | 2024-08-23 | Aurora Young Blud | L   | 0.217      | -            | -                | -                | -         |    -2.42 | chudy, darchevile, Enzo, Nami, yvro       |
|            4 |     3271 | 2024-08-21 | Illuminar         | W   | 0.204      | -            | -                | -                | -         |     1.81 | chudy, darchevile, Enzo, Nami, yvro       |
|            3 |     3328 | 2024-08-19 | GUN5              | L   | 0.192      | -            | -                | -                | -         |    -1.28 | chudy, darchevile, Enzo, Nami, yvro       |
|            2 |     3376 | 2024-08-17 | GUN5              | L   | 0.179      | -            | -                | -                | -         |    -1.21 | chudy, darchevile, Enzo, Nami, yvro       |
|            1 |     3438 | 2024-08-15 | ALTERNATE aTTaX   | W   | 0.163      | 0.371        | 0.075 (0.005)    | 0.683 (0.041)    | -         |     4.22 | chudy, darchevile, Enzo, Nami, yvro       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,463.25)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-11-17 |      0.791 | $3,000.00      | $2,373.67       |
| 2024-11-16 |      0.785 | $14,125.00     | $11,089.57      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
