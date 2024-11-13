### Roster Details<br />
Team Name: 500<br />
Roster: CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN<br />
Global Rank: [43](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_13.md)<br />
Regional Rank: [30]( ../../standings_europe_2024_11_13.md)<br />
<br />
Final Rank Value:  1095.0<br />
<br />
Final Rank Value (1095.0) = Starting Rank Value (955.8) + Head To Head Adjustments (139.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.375[<sup>1</sup>](#table2)
- Bounty Collected: 0.410[<sup>2</sup>](#table1)
- Opponent Network: 0.329[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.278<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 955.8
- 400 + ( ( 0.278 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 955.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |       37 | 2024-11-12 | BetBoom         | L   | 1.000      | -            | -                | -                | -         |   -13.95 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           35 |       48 | 2024-11-12 | GUN5            | W   | 1.000      | 0.384        | 0.051 (0.020)    | 1.000 (0.384)    | 0 (0.000) |    15.66 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           34 |       80 | 2024-11-11 | ENCE            | W   | 1.000      | 0.384        | 0.258 (0.099)    | -                | 0 (0.000) |    24.72 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           33 |      101 | 2024-11-10 | 9 Pandas        | W   | 1.000      | 0.384        | 0.088 (0.034)    | 0.858 (0.330)    | 0 (0.000) |    20.32 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           32 |      136 | 2024-11-08 | Nemiga          | L   | 1.000      | -            | -                | -                | -         |    -5.29 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           31 |      142 | 2024-11-08 | Sashi           | W   | 1.000      | 0.384        | 0.056 (0.021)    | 0.652 (0.250)    | 0 (0.000) |    15.53 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           30 |      154 | 2024-11-07 | Monte           | W   | 1.000      | 0.426        | 0.035 (0.015)    | 0.807 (0.344)    | 0 (0.000) |    20.91 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           29 |      158 | 2024-11-07 | SINNERS         | L   | 1.000      | -            | -                | -                | -         |   -14.35 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           28 |      173 | 2024-11-06 | Passion UA      | W   | 1.000      | 0.426        | 0.105 (0.045)    | 1.000 (0.426)    | 0 (0.000) |    15.57 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           27 |      207 | 2024-11-04 | Zero Tenacity   | W   | 1.000      | 0.384        | 0.059 (0.023)    | 0.753 (0.289)    | 0 (0.000) |    15.99 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           26 |      245 | 2024-11-02 | Into the Breach | L   | 1.000      | -            | -                | -                | -         |   -15.31 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           25 |      286 | 2024-10-31 | GUN5            | L   | 1.000      | -            | -                | -                | -         |   -13.65 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           24 |      334 | 2024-10-29 | AMKAL           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.71 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           23 |      346 | 2024-10-28 | Zero Tenacity   | W   | 1.000      | 0.426        | 0.059 (0.025)    | 0.753 (0.321)    | 0 (0.000) |    16.86 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           22 |      349 | 2024-10-28 | OG              | W   | 1.000      | 0.426        | 0.134 (0.057)    | -                | 0 (0.000) |    18.62 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           21 |      486 | 2024-10-20 | ECSTATIC        | W   | 1.000      | 0.354        | -                | 0.848 (0.300)    | -         |    16.50 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           20 |      628 | 2024-10-14 | UNiTY           | W   | 0.999      | -            | -                | -                | -         |    15.24 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           19 |      650 | 2024-10-12 | CYBERSHOKE      | W   | 0.987      | -            | -                | -                | -         |    15.18 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           18 |      721 | 2024-10-09 | HOTU            | W   | 0.964      | -            | -                | -                | -         |    10.90 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           17 |      828 | 2024-10-05 | Permitta        | W   | 0.940      | 0.354        | -                | 1.000 (0.333)    | -         |    14.63 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           16 |      865 | 2024-10-04 | ENCE Academy    | L   | 0.934      | -            | -                | -                | -         |   -21.09 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           15 |      915 | 2024-10-03 | ECLOT           | W   | 0.925      | 0.333        | 0.077 (0.024)    | 1.000 (0.308)    | -         |    20.18 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           14 |      947 | 2024-10-02 | CYBERSHOKE      | W   | 0.919      | -            | -                | -                | -         |    16.04 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           13 |     1023 | 2024-09-30 | ALTERNATE aTTaX | W   | 0.905      | -            | -                | -                | -         |    15.59 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           12 |     1052 | 2024-09-29 | Insilio         | L   | 0.898      | -            | -                | -                | -         |   -10.16 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           11 |     1172 | 2024-09-26 | ARCRED          | L   | 0.880      | -            | -                | -                | -         |   -16.20 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           10 |     1657 | 2024-09-11 | Daystar         | L   | 0.781      | -            | -                | -                | -         |   -17.69 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            9 |     1759 | 2024-09-07 | NAVI Junior     | L   | 0.754      | -            | -                | -                | -         |    -9.58 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            8 |     1793 | 2024-09-06 | K27             | W   | 0.747      | -            | -                | -                | -         |     3.38 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            7 |     2457 | 2024-08-19 | Cloud9          | L   | 0.627      | -            | -                | -                | -         |   -10.19 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            6 |     2461 | 2024-08-19 | kONO            | W   | 0.627      | -            | -                | -                | -         |     7.83 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            5 |     2469 | 2024-08-19 | Spirit Academy  | W   | 0.626      | -            | -                | -                | -         |    11.30 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            4 |     2521 | 2024-08-17 | GenOne          | L   | 0.613      | -            | -                | -                | -         |   -17.07 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            3 |     3664 | 2024-07-16 | TSM             | L   | 0.399      | -            | -                | -                | -         |    -6.20 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            2 |     3803 | 2024-07-09 | Rebels          | L   | 0.354      | -            | -                | -                | -         |    -6.08 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            1 |     3813 | 2024-07-09 | kONO            | L   | 0.353      | -            | -                | -                | -         |    -7.62 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,673.19)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-11-09 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-10-05 |      0.939 | $1,250.00      | $1,173.19       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
