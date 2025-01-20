### Roster Details<br />
Team Name: Anonymo<br />
Roster: chudy, darchevile, Enzo, Michat, Nami<br />
Global Rank: [131](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [96]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  765.5<br />
<br />
Final Rank Value (765.5) = Starting Rank Value (840.1) + Head To Head Adjustments (-74.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.456[<sup>1</sup>](#table2)
- Bounty Collected: 0.317[<sup>2</sup>](#table1)
- Opponent Network: 0.113[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.222<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 840.1
- 400 + ( ( 0.222 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 840.1


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
|           34 |       52 | 2025-01-07 | CS2News           | L   | 1.000      | -            | -                | -                | -         |   -23.91 | chudy, darchevile, Enzo, Michat, Nami     |
|           33 |       62 | 2025-01-04 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -16.31 | chudy, darchevile, Enzo, Michat, Nami     |
|           32 |       72 | 2024-12-29 | BRUTE             | W   | 1.000      | 0.143        | -                | 0.092 (0.013)    | 0 (0.000) |    12.04 | Bambosh, chudy, darchevile, Nami, next1me |
|           31 |       87 | 2024-12-27 | 9INE              | L   | 1.000      | -            | -                | -                | -         |    -6.48 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           30 |      122 | 2024-12-21 | Astralis Talent   | L   | 1.000      | -            | -                | -                | -         |   -18.20 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           29 |      128 | 2024-12-20 | Monte Gen         | L   | 0.999      | -            | -                | -                | -         |   -13.11 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           28 |      135 | 2024-12-20 | Verdant           | L   | 0.997      | -            | -                | -                | -         |   -14.40 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           27 |      137 | 2024-12-19 | FLuffy Gangsters  | W   | 0.993      | 0.333        | 0.015 (0.005)    | 0.592 (0.196)    | 0 (0.000) |    12.43 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           26 |      165 | 2024-12-17 | kONO              | W   | 0.979      | 0.333        | 0.046 (0.015)    | 0.747 (0.244)    | 0 (0.000) |    16.84 | chudy, darchevile, Enzo, Melavi, Nami     |
|           25 |      441 | 2024-12-03 | Illuminar         | L   | 0.885      | -            | -                | -                | -         |   -11.96 | chudy, darchevile, Enzo, Melavi, Nami     |
|           24 |      461 | 2024-12-02 | Apogee            | W   | 0.878      | 0.333        | 0.025 (0.007)    | 0.418 (0.122)    | 0 (0.000) |    18.69 | chudy, darchevile, Enzo, Melavi, Nami     |
|           23 |      482 | 2024-12-01 | GenOne            | L   | 0.870      | -            | -                | -                | -         |   -14.17 | chudy, darchevile, Enzo, Melavi, Nami     |
|           22 |      553 | 2024-11-28 | ENCE Academy      | W   | 0.851      | 0.333        | 0.014 (0.004)    | 0.285 (0.081)    | 0 (0.000) |    11.84 | chudy, darchevile, Enzo, Melavi, Nami     |
|           21 |      746 | 2024-11-17 | L&G               | L   | 0.778      | -            | -                | -                | -         |   -10.31 | chudy, darchevile, Enzo, ex1st, Nami      |
|           20 |      774 | 2024-11-16 | Kubix             | L   | 0.772      | -            | -                | -                | -         |   -11.24 | chudy, darchevile, Melavi, Nami, yvro     |
|           19 |      849 | 2024-11-14 | L&G               | W   | 0.757      | 0.333        | 0.058 (0.015)    | 0.568 (0.143)    | 0 (0.000) |    13.37 | chudy, darchevile, Enzo, ex1st, Nami      |
|           18 |      964 | 2024-11-10 | GenOne            | W   | 0.730      | 0.333        | 0.019 (0.005)    | 0.580 (0.141)    | 0 (0.000) |    11.16 | chudy, darchevile, Enzo, ex1st, Nami      |
|           17 |     1062 | 2024-11-04 | Haspers           | W   | 0.693      | 0.366        | 0.029 (0.007)    | -                | 0 (0.000) |     5.22 | chudy, darchevile, Melavi, Nami, yvro     |
|           16 |     1191 | 2024-10-29 | Illuminar         | W   | 0.653      | 0.366        | 0.018 (0.004)    | 0.483 (0.115)    | 0 (0.000) |    14.34 | chudy, darchevile, Melavi, Nami, yvro     |
|           15 |     1782 | 2024-10-03 | Heimo             | L   | 0.476      | -            | -                | -                | -         |    -8.99 | darchevile, Enzo, ex1st, morelz, Nami     |
|           14 |     1818 | 2024-10-02 | Illuminar         | L   | 0.470      | -            | -                | -                | -         |    -4.26 | chudy, darchevile, Enzo, morelz, Nami     |
|           13 |     2002 | 2024-09-27 | Kosovo            | L   | 0.436      | -            | -                | -                | -         |   -10.87 | chudy, darchevile, Melavi, Nami, yvro     |
|           12 |     2045 | 2024-09-26 | DMS               | L   | 0.430      | -            | -                | -                | -         |    -8.28 | chudy, darchevile, Melavi, Nami, yvro     |
|           11 |     2147 | 2024-09-24 | UNiTY             | L   | 0.416      | -            | -                | -                | -         |    -4.28 | chudy, darchevile, Enzo, Nami, yvro       |
|           10 |     2256 | 2024-09-20 | Into the Breach   | L   | 0.390      | -            | -                | -                | -         |    -4.92 | chudy, darchevile, Enzo, Nami, yvro       |
|            9 |     2614 | 2024-09-07 | Daystar           | L   | 0.306      | -            | -                | -                | -         |    -6.66 | chudy, darchevile, Enzo, Nami, yvro       |
|            8 |     2758 | 2024-09-03 | Endpoint          | L   | 0.279      | -            | -                | -                | -         |    -4.15 | chudy, darchevile, Enzo, Nami, yvro       |
|            7 |     2998 | 2024-08-27 | ex-Enterprise     | L   | 0.231      | -            | -                | -                | -         |    -3.43 | chudy, darchevile, Enzo, Nami, yvro       |
|            6 |     3126 | 2024-08-25 | Verdant           | W   | 0.216      | 0.371        | 0.050 (0.004)    | 0.427 (0.034)    | 0 (0.000) |     4.43 | chudy, darchevile, Enzo, Nami, yvro       |
|            5 |     3173 | 2024-08-23 | Aurora Young Blud | L   | 0.204      | -            | -                | -                | -         |    -2.28 | chudy, darchevile, Enzo, Nami, yvro       |
|            4 |     3280 | 2024-08-21 | Illuminar         | W   | 0.190      | -            | -                | -                | -         |     1.68 | chudy, darchevile, Enzo, Nami, yvro       |
|            3 |     3337 | 2024-08-19 | GUN5              | L   | 0.178      | -            | -                | -                | -         |    -1.18 | chudy, darchevile, Enzo, Nami, yvro       |
|            2 |     3385 | 2024-08-17 | GUN5              | L   | 0.165      | -            | -                | -                | -         |    -1.10 | chudy, darchevile, Enzo, Nami, yvro       |
|            1 |     3447 | 2024-08-15 | ALTERNATE aTTaX   | W   | 0.150      | 0.371        | 0.074 (0.004)    | 0.680 (0.038)    | -         |     3.87 | chudy, darchevile, Enzo, Nami, yvro       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,230.86)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-11-17 |      0.778 | $3,000.00      | $2,332.96       |
| 2024-11-16 |      0.772 | $14,125.00     | $10,897.89      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
