### Roster Details<br />
Team Name: Anonymo<br />
Roster: chudy, darchevile, Enzo, Michat, Nami<br />
Global Rank: [132](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [96]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  767.5<br />
<br />
Final Rank Value (767.5) = Starting Rank Value (841.9) + Head To Head Adjustments (-74.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.455[<sup>1</sup>](#table2)
- Bounty Collected: 0.319[<sup>2</sup>](#table1)
- Opponent Network: 0.117[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.223<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 841.9
- 400 + ( ( 0.223 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 841.9


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
|           34 |       39 | 2025-01-07 | CS2News           | L   | 1.000      | -            | -                | -                | -         |   -24.00 | chudy, darchevile, Enzo, Michat, Nami     |
|           33 |       49 | 2025-01-04 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -15.90 | chudy, darchevile, Enzo, Michat, Nami     |
|           32 |       59 | 2024-12-29 | BRUTE             | W   | 1.000      | 0.143        | -                | 0.088 (0.013)    | 0 (0.000) |    11.98 | Bambosh, chudy, darchevile, Nami, next1me |
|           31 |       74 | 2024-12-27 | 9INE              | L   | 1.000      | -            | -                | -                | -         |    -6.29 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           30 |      109 | 2024-12-21 | Astralis Talent   | L   | 1.000      | -            | -                | -                | -         |   -18.33 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           29 |      115 | 2024-12-20 | Monte Gen         | L   | 1.000      | -            | -                | -                | -         |   -12.62 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           28 |      122 | 2024-12-20 | Verdant           | L   | 1.000      | -            | -                | -                | -         |   -14.59 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           27 |      124 | 2024-12-19 | FLuffy Gangsters  | W   | 1.000      | 0.333        | 0.015 (0.005)    | 0.583 (0.194)    | 0 (0.000) |    12.72 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           26 |      152 | 2024-12-17 | kONO              | W   | 1.000      | 0.333        | 0.044 (0.015)    | 0.721 (0.240)    | 0 (0.000) |    17.10 | chudy, darchevile, Enzo, Melavi, Nami     |
|           25 |      428 | 2024-12-03 | Illuminar         | L   | 0.927      | -            | -                | -                | -         |   -12.49 | chudy, darchevile, Enzo, Melavi, Nami     |
|           24 |      448 | 2024-12-02 | Apogee            | W   | 0.920      | 0.333        | 0.024 (0.007)    | 0.399 (0.122)    | 0 (0.000) |    19.68 | chudy, darchevile, Enzo, Melavi, Nami     |
|           23 |      469 | 2024-12-01 | GenOne            | L   | 0.912      | -            | -                | -                | -         |   -14.82 | chudy, darchevile, Enzo, Melavi, Nami     |
|           22 |      540 | 2024-11-28 | ENCE Academy      | W   | 0.893      | 0.333        | 0.014 (0.004)    | 0.329 (0.098)    | 0 (0.000) |    12.59 | chudy, darchevile, Enzo, Melavi, Nami     |
|           21 |      733 | 2024-11-17 | L&G               | L   | 0.820      | -            | -                | -                | -         |   -10.73 | chudy, darchevile, Enzo, ex1st, Nami      |
|           20 |      761 | 2024-11-16 | Kubix             | L   | 0.814      | -            | -                | -                | -         |   -11.83 | chudy, darchevile, Melavi, Nami, yvro     |
|           19 |      836 | 2024-11-14 | L&G               | W   | 0.799      | 0.333        | 0.057 (0.015)    | 0.562 (0.150)    | 0 (0.000) |    14.21 | chudy, darchevile, Enzo, ex1st, Nami      |
|           18 |      951 | 2024-11-10 | GenOne            | W   | 0.772      | 0.333        | 0.018 (0.005)    | 0.563 (0.145)    | 0 (0.000) |    11.76 | chudy, darchevile, Enzo, ex1st, Nami      |
|           17 |     1049 | 2024-11-04 | Haspers           | W   | 0.735      | 0.366        | 0.029 (0.008)    | -                | 0 (0.000) |     5.53 | chudy, darchevile, Melavi, Nami, yvro     |
|           16 |     1178 | 2024-10-29 | Illuminar         | W   | 0.695      | 0.366        | 0.018 (0.005)    | 0.478 (0.121)    | 0 (0.000) |    15.41 | chudy, darchevile, Melavi, Nami, yvro     |
|           15 |     1769 | 2024-10-03 | Heimo             | L   | 0.518      | -            | -                | -                | -         |    -9.82 | darchevile, Enzo, ex1st, morelz, Nami     |
|           14 |     1805 | 2024-10-02 | Illuminar         | L   | 0.512      | -            | -                | -                | -         |    -4.48 | chudy, darchevile, Enzo, morelz, Nami     |
|           13 |     1989 | 2024-09-27 | Kosovo            | L   | 0.478      | -            | -                | -                | -         |   -11.81 | chudy, darchevile, Melavi, Nami, yvro     |
|           12 |     2032 | 2024-09-26 | DMS               | L   | 0.472      | -            | -                | -                | -         |    -8.78 | chudy, darchevile, Melavi, Nami, yvro     |
|           11 |     2134 | 2024-09-24 | UNiTY             | L   | 0.458      | -            | -                | -                | -         |    -4.55 | chudy, darchevile, Enzo, Nami, yvro       |
|           10 |     2243 | 2024-09-20 | Into the Breach   | L   | 0.432      | -            | -                | -                | -         |    -5.12 | chudy, darchevile, Enzo, Nami, yvro       |
|            9 |     2601 | 2024-09-07 | Daystar           | L   | 0.348      | -            | -                | -                | -         |    -7.53 | chudy, darchevile, Enzo, Nami, yvro       |
|            8 |     2745 | 2024-09-03 | Endpoint          | L   | 0.321      | -            | -                | -                | -         |    -4.55 | chudy, darchevile, Enzo, Nami, yvro       |
|            7 |     2985 | 2024-08-27 | ex-Enterprise     | L   | 0.273      | -            | -                | -                | -         |    -3.97 | chudy, darchevile, Enzo, Nami, yvro       |
|            6 |     3113 | 2024-08-25 | Verdant           | W   | 0.258      | 0.371        | 0.049 (0.005)    | 0.416 (0.040)    | 0 (0.000) |     5.29 | chudy, darchevile, Enzo, Nami, yvro       |
|            5 |     3160 | 2024-08-23 | Aurora Young Blud | L   | 0.246      | -            | -                | -                | -         |    -2.66 | chudy, darchevile, Enzo, Nami, yvro       |
|            4 |     3267 | 2024-08-21 | Illuminar         | W   | 0.232      | -            | -                | -                | -         |     2.10 | chudy, darchevile, Enzo, Nami, yvro       |
|            3 |     3324 | 2024-08-19 | GUN5              | L   | 0.220      | -            | -                | -                | -         |    -1.49 | chudy, darchevile, Enzo, Nami, yvro       |
|            2 |     3372 | 2024-08-17 | GUN5              | L   | 0.207      | -            | -                | -                | -         |    -1.42 | chudy, darchevile, Enzo, Nami, yvro       |
|            1 |     3434 | 2024-08-15 | ALTERNATE aTTaX   | W   | 0.192      | 0.371        | 0.076 (0.005)    | 0.688 (0.049)    | -         |     4.97 | chudy, darchevile, Enzo, Nami, yvro       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,950.77)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-11-17 |      0.820 | $3,000.00      | $2,459.08       |
| 2024-11-16 |      0.814 | $14,125.00     | $11,491.69      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
