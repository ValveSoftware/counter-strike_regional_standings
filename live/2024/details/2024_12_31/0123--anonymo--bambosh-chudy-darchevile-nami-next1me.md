### Roster Details<br />
Team Name: Anonymo<br />
Roster: Bambosh, chudy, darchevile, Nami, next1me<br />
Global Rank: [123](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [88]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  803.2<br />
<br />
Final Rank Value (803.2) = Starting Rank Value (830.9) + Head To Head Adjustments (-27.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.444[<sup>1</sup>](#table2)
- Bounty Collected: 0.319[<sup>2</sup>](#table1)
- Opponent Network: 0.122[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.221<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 830.9
- 400 + ( ( 0.221 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 830.9


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
|           31 |        3 | 2024-12-29 | BRUTE             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.66 | Bambosh, chudy, darchevile, Nami, next1me |
|           30 |       18 | 2024-12-27 | 9INE              | L   | 1.000      | -            | -                | -                | -         |    -6.20 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           29 |       53 | 2024-12-21 | Astralis Talent   | L   | 1.000      | -            | -                | -                | -         |   -18.39 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           28 |       59 | 2024-12-20 | Monte Gen         | L   | 1.000      | -            | -                | -                | -         |   -12.05 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           27 |       66 | 2024-12-20 | Verdant           | L   | 1.000      | -            | -                | -                | -         |   -15.25 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           26 |       68 | 2024-12-19 | FLuffy Gangsters  | W   | 1.000      | 0.333        | 0.013 (0.004)    | 0.563 (0.188)    | 0 (0.000) |    13.05 | Bambosh, chudy, darchevile, Enzo, Nami    |
|           25 |       96 | 2024-12-17 | kONO              | W   | 1.000      | 0.333        | 0.037 (0.012)    | 0.597 (0.199)    | 0 (0.000) |    16.63 | chudy, darchevile, Enzo, Melavi, Nami     |
|           24 |      372 | 2024-12-03 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |   -13.64 | chudy, darchevile, Enzo, Melavi, Nami     |
|           23 |      392 | 2024-12-02 | Apogee            | W   | 1.000      | 0.333        | 0.020 (0.007)    | 0.387 (0.129)    | 0 (0.000) |    21.41 | chudy, darchevile, Enzo, Melavi, Nami     |
|           22 |      413 | 2024-12-01 | GenOne            | L   | 1.000      | -            | -                | -                | -         |   -16.92 | chudy, darchevile, Enzo, Melavi, Nami     |
|           21 |      484 | 2024-11-28 | ENCE Academy      | W   | 0.992      | 0.333        | 0.013 (0.004)    | 0.292 (0.097)    | 0 (0.000) |    13.99 | chudy, darchevile, Enzo, Melavi, Nami     |
|           20 |      677 | 2024-11-17 | L&G               | L   | 0.919      | -            | -                | -                | -         |   -11.75 | chudy, darchevile, Enzo, ex1st, Nami      |
|           19 |      705 | 2024-11-16 | Kubix             | L   | 0.912      | -            | -                | -                | -         |   -13.49 | chudy, darchevile, Melavi, Nami, yvro     |
|           18 |      780 | 2024-11-14 | L&G               | W   | 0.898      | 0.333        | 0.050 (0.015)    | 0.589 (0.176)    | 0 (0.000) |    16.11 | chudy, darchevile, Enzo, ex1st, Nami      |
|           17 |      895 | 2024-11-10 | GenOne            | W   | 0.871      | 0.333        | 0.016 (0.005)    | 0.485 (0.141)    | 0 (0.000) |    12.00 | chudy, darchevile, Enzo, ex1st, Nami      |
|           16 |      993 | 2024-11-04 | Haspers           | W   | 0.834      | 0.366        | 0.026 (0.008)    | 0.034 (0.010)    | 0 (0.000) |     6.18 | chudy, darchevile, Melavi, Nami, yvro     |
|           15 |     1122 | 2024-10-29 | Illuminar         | W   | 0.794      | 0.366        | 0.016 (0.005)    | 0.497 (0.144)    | 0 (0.000) |    17.71 | chudy, darchevile, Melavi, Nami, yvro     |
|           14 |     1749 | 2024-10-02 | Illuminar         | L   | 0.611      | -            | -                | -                | -         |    -4.87 | chudy, darchevile, Enzo, morelz, Nami     |
|           13 |     1933 | 2024-09-27 | Kosovo            | L   | 0.577      | -            | -                | -                | -         |   -13.59 | chudy, darchevile, Melavi, Nami, yvro     |
|           12 |     1976 | 2024-09-26 | DMS               | L   | 0.571      | -            | -                | -                | -         |    -9.68 | chudy, darchevile, Melavi, Nami, yvro     |
|           11 |     2078 | 2024-09-24 | UNiTY             | L   | 0.557      | -            | -                | -                | -         |    -5.15 | chudy, darchevile, Enzo, Nami, yvro       |
|           10 |     2187 | 2024-09-20 | Into the Breach   | L   | 0.531      | -            | -                | -                | -         |    -5.54 | chudy, darchevile, Enzo, Nami, yvro       |
|            9 |     2545 | 2024-09-07 | Daystar           | L   | 0.447      | -            | -                | -                | -         |    -9.37 | chudy, darchevile, Enzo, Nami, yvro       |
|            8 |     2689 | 2024-09-03 | Endpoint          | L   | 0.420      | -            | -                | -                | -         |    -5.42 | chudy, darchevile, Enzo, Nami, yvro       |
|            7 |     2929 | 2024-08-27 | ex-Enterprise     | L   | 0.372      | -            | -                | -                | -         |    -5.09 | chudy, darchevile, Enzo, Nami, yvro       |
|            6 |     3057 | 2024-08-25 | Verdant           | W   | 0.357      | 0.371        | 0.042 (0.006)    | 0.421 (0.056)    | 0 (0.000) |     7.31 | chudy, darchevile, Enzo, Nami, yvro       |
|            5 |     3104 | 2024-08-23 | Aurora Young Blud | L   | 0.345      | -            | -                | -                | -         |    -3.61 | chudy, darchevile, Enzo, Nami, yvro       |
|            4 |     3211 | 2024-08-21 | Illuminar         | W   | 0.331      | -            | -                | -                | -         |     3.35 | chudy, darchevile, Enzo, Nami, yvro       |
|            3 |     3268 | 2024-08-19 | GUN5              | L   | 0.319      | -            | -                | -                | -         |    -2.36 | chudy, darchevile, Enzo, Nami, yvro       |
|            2 |     3316 | 2024-08-17 | GUN5              | L   | 0.306      | -            | -                | -                | -         |    -2.32 | chudy, darchevile, Enzo, Nami, yvro       |
|            1 |     3378 | 2024-08-15 | ALTERNATE aTTaX   | W   | 0.291      | 0.371        | 0.073 (0.008)    | 0.760 (0.082)    | -         |     7.53 | chudy, darchevile, Enzo, Nami, yvro       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,643.25)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-11-17 |      0.919 | $3,000.00      | $2,755.57       |
| 2024-11-16 |      0.912 | $14,125.00     | $12,887.68      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
