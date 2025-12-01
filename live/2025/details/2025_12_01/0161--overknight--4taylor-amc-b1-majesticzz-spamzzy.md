### Roster Details<br />
Team Name: OverKnight<br />
Roster: 4TAYLOR, AMC, b1, Majesticzz, spamzzy<br />
Global Rank: [161](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [38]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  719.4<br />
<br />
Final Rank Value (719.4) = Starting Rank Value (700.6) + Head To Head Adjustments (18.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.225[<sup>1</sup>](#table2)
- Bounty Collected: 0.316[<sup>2</sup>](#table1)
- Opponent Network: 0.091[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 700.6
- 400 + ( ( 0.158 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 700.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |      430 | 2025-11-10 | BOSS          | L   | 1.000      | -            | -                | -                | -         |   -11.80 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy      |
|           42 |      881 | 2025-10-28 | Marsborne     | L   | 0.975      | -            | -                | -                | -         |    -3.35 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy      |
|           41 |      913 | 2025-10-27 | Phoenix       | W   | 0.970      | 0.363        | 0.003 (0.001)    | 0.282 (0.099)    | 0 (0.000) |    14.63 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy      |
|           40 |      959 | 2025-10-26 | Sakura        | W   | 0.963      | 0.363        | 0.046 (0.016)    | 0.350 (0.122)    | 0 (0.000) |    14.98 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy      |
|           39 |      961 | 2025-10-26 | Outfit 49     | W   | 0.962      | -            | -                | -                | 0 (0.000) |     9.29 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy      |
|           38 |     1013 | 2025-10-25 | LAG           | L   | 0.956      | -            | -                | -                | -         |   -12.41 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy      |
|           37 |     1015 | 2025-10-25 | NYX           | W   | 0.955      | -            | -                | -                | 0 (0.000) |     6.44 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy      |
|           36 |     1073 | 2025-10-24 | SkinRave      | L   | 0.949      | -            | -                | -                | -         |    -3.43 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy      |
|           35 |     1130 | 2025-10-23 | Zomblers      | W   | 0.942      | 0.363        | 0.001 (0.001)    | 0.316 (0.108)    | 0 (0.000) |    13.84 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy      |
|           34 |     1195 | 2025-10-21 | Sakura        | W   | 0.930      | 0.333        | 0.046 (0.014)    | 0.350 (0.108)    | 0 (0.000) |    18.59 | 4TAYLOR, AMC, b1, Majesticzz, vanilla      |
|           33 |     1261 | 2025-10-17 | Nocturnal     | W   | 0.902      | -            | -                | -                | 0 (0.000) |     5.08 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy      |
|           32 |     1395 | 2025-10-13 | BOSS          | L   | 0.876      | -            | -                | -                | -         |    -9.55 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy      |
|           31 |     1495 | 2025-10-09 | TSG           | L   | 0.849      | -            | -                | -                | -         |   -17.30 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy      |
|           30 |     1542 | 2025-10-08 | Voca          | L   | 0.842      | -            | -                | -                | -         |    -6.72 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy      |
|           29 |     1656 | 2025-10-06 | BOSS          | W   | 0.829      | 0.363        | 0.009 (0.003)    | 0.455 (0.137)    | 0 (0.000) |    15.79 | 4TAYLOR, AMC, b1, Jardani, Majesticzz      |
|           28 |     1712 | 2025-10-05 | TSG           | W   | 0.823      | 0.363        | -                | 0.206 (0.062)    | 0 (0.000) |     8.23 | 4TAYLOR, AMC, b1, Jardani, Majesticzz      |
|           27 |     1721 | 2025-10-05 | Voca          | L   | 0.822      | -            | -                | -                | -         |    -6.99 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy      |
|           26 |     1770 | 2025-10-04 | Sakura        | W   | 0.816      | 0.333        | 0.046 (0.013)    | 0.350 (0.095)    | 0 (0.000) |    17.88 | 4TAYLOR, AMC, b1, Jardani, spamzzy         |
|           25 |     1849 | 2025-10-02 | regain        | L   | 0.802      | -            | -                | -                | -         |   -10.51 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy      |
|           24 |     1888 | 2025-10-01 | Sakura        | W   | 0.796      | 0.333        | 0.046 (0.012)    | 0.350 (0.093)    | -         |    18.02 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy      |
|           23 |     2656 | 2025-09-10 | Aether        | L   | 0.656      | -            | -                | -                | -         |   -10.88 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy      |
|           22 |     2710 | 2025-09-09 | LAG           | L   | 0.649      | -            | -                | -                | -         |    -8.69 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy      |
|           21 |     2764 | 2025-09-08 | NYX           | W   | 0.642      | -            | -                | -                | -         |     5.13 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy      |
|           20 |     3119 | 2025-08-23 | TSG           | L   | 0.536      | -            | -                | -                | -         |   -11.57 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy      |
|           19 |     3151 | 2025-08-21 | Phoenix       | L   | 0.522      | -            | -                | -                | -         |    -6.71 | 4TAYLOR, AMC, Jardani, Majesticzz, spamzzy |
|           18 |     3232 | 2025-08-17 | MIGHT         | W   | 0.496      | -            | -                | -                | -         |     3.62 | AMC, b1, Jardani, Majesticzz, spamzzy      |
|           17 |     3312 | 2025-08-15 | regain        | L   | 0.482      | -            | -                | -                | -         |    -7.04 | AMC, b1, Jardani, Majesticzz, spamzzy      |
|           16 |     3361 | 2025-08-14 | InControl     | L   | 0.476      | -            | -                | -                | -         |    -6.92 | AMC, b1, Jardani, Majesticzz, spamzzy      |
|           15 |     3405 | 2025-08-13 | LAG           | L   | 0.469      | -            | -                | -                | -         |    -7.25 | AMC, b1, Jardani, Majesticzz, spamzzy      |
|           14 |     3460 | 2025-08-12 | Getting Info  | W   | 0.463      | 0.363        | 0.005 (0.001)    | -                | -         |     8.03 | AMC, b1, Jardani, Majesticzz, spamzzy      |
|           13 |     3514 | 2025-08-11 | Ghost         | W   | 0.456      | 0.363        | 0.003 (0.001)    | 0.167 (0.028)    | -         |     6.23 | AMC, b1, Jardani, Majesticzz, spamzzy      |
|           12 |     3518 | 2025-08-11 | BOSS          | L   | 0.455      | -            | -                | -                | -         |    -5.98 | AMC, b1, Jardani, Majesticzz, spamzzy      |
|           11 |     3563 | 2025-08-10 | Arrival Seven | W   | 0.449      | -            | -                | -                | -         |     3.95 | AMC, b1, Jardani, Majesticzz, spamzzy      |
|           10 |     3632 | 2025-08-07 | BOSS          | L   | 0.428      | -            | -                | -                | -         |    -5.75 | AMC, b1, Jardani, Majesticzz, spamzzy      |
|            9 |     3770 | 2025-07-28 | Marsborne     | L   | 0.362      | -            | -                | -                | -         |    -0.92 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy      |
|            8 |     4096 | 2025-07-12 | Marsborne     | L   | 0.255      | -            | -                | -                | -         |    -0.65 | AMC, b1, Jardani, Majesticzz, spamzzy      |
|            7 |     4102 | 2025-07-12 | M80           | L   | 0.254      | -            | -                | -                | -         |    -0.18 | AMC, b1, Jardani, Majesticzz, spamzzy      |
|            6 |     4125 | 2025-07-11 | Sakura        | W   | 0.249      | 0.624        | 0.046 (0.007)    | 0.350 (0.054)    | -         |     6.12 | AMC, b1, Jardani, Majesticzz, spamzzy      |
|            5 |     4305 | 2025-06-24 | Money Crew    | L   | 0.136      | -            | -                | -                | -         |    -2.57 | AMC, b1, Jardani, Majesticzz, spamzzy      |
|            4 |     4409 | 2025-06-16 | MIGHT         | W   | 0.083      | -            | -                | -                | -         |     0.61 | AMC, b1, Jardani, Majesticzz, spamzzy      |
|            3 |     4453 | 2025-06-14 | Subtick       | W   | 0.069      | -            | -                | -                | -         |     0.34 | AMC, b1, Jardani, Majesticzz, spamzzy      |
|            2 |     4526 | 2025-06-12 | Getting Info  | L   | 0.056      | -            | -                | -                | -         |    -1.13 | AMC, b1, Jardani, Majesticzz, spamzzy      |
|            1 |     4583 | 2025-06-09 | Aether        | W   | 0.036      | -            | -                | -                | -         |     0.30 | AMC, b1, Jardani, Majesticzz, spamzzy      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($210.50)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-08 |      0.842 | $250.00        | $210.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
