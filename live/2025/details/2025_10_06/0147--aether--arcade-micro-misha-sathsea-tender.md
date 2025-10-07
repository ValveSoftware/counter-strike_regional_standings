### Roster Details<br />
Team Name: Aether<br />
Roster: arcade, micro, misha, Sathsea, Tender<br />
Global Rank: [147](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_10_06.md)<br />
Regional Rank: [37]( ../../standings_americas_2025_10_06.md)<br />
<br />
Final Rank Value:  706.3<br />
<br />
Final Rank Value (706.3) = Starting Rank Value (699.0) + Head To Head Adjustments (7.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.279[<sup>1</sup>](#table2)
- Bounty Collected: 0.277[<sup>2</sup>](#table1)
- Opponent Network: 0.054[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.153<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 699.0
- 400 + ( ( 0.153 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 699.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |      451 | 2025-09-18 | Wildcard       | L   | 1.000      | -            | -                | -                | -         |    -2.65 | arcade, micro, misha, Sathsea, Tender    |
|           18 |      479 | 2025-09-17 | BOSS           | W   | 1.000      | 0.363        | 0.009 (0.003)    | 0.491 (0.178)    | 0 (0.000) |    21.04 | arcade, micro, misha, Sathsea, Tender    |
|           17 |      657 | 2025-09-12 | Outfit 49      | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.109 (0.039)    | 0 (0.000) |    10.47 | arcade, micro, misha, Sathsea, Tender    |
|           16 |      698 | 2025-09-11 | Mythic         | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.076 (0.028)    | 0 (0.000) |     9.13 | arcade, micro, misha, Sathsea, Tender    |
|           15 |      745 | 2025-09-10 | FULL SEND      | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.242 (0.088)    | 0 (0.000) |    10.97 | arcade, micro, misha, Sathsea, Tender    |
|           14 |      841 | 2025-09-08 | Outfit 49      | L   | 1.000      | -            | -                | -                | -         |   -21.48 | arcade, micro, misha, Sathsea, Tender    |
|           13 |     1184 | 2025-08-24 | BOSS           | L   | 0.916      | -            | -                | -                | -         |   -10.03 | arcade, Jeebs, micro, obi, Tender        |
|           12 |     1216 | 2025-08-22 | Shimmer        | W   | 0.903      | 0.333        | 0.036 (0.011)    | 0.139 (0.042)    | 0 (0.000) |    14.71 | arcade, micro, N2o, obi, Tender          |
|           11 |     1279 | 2025-08-20 | MIGHT          | W   | 0.885      | 0.333        | 0.000 (0.000)    | 0.109 (0.032)    | 0 (0.000) |     7.38 | arcade, micro, N2o, obi, Tender          |
|           10 |     1287 | 2025-08-19 | Legacy Kingdom | L   | 0.883      | -            | -                | -                | -         |   -18.69 | arcade, micro, N2o, obi, Tender          |
|            9 |     1320 | 2025-08-17 | Chicken Coop   | L   | 0.869      | -            | -                | -                | -         |   -11.07 | arcade, arias, clipzera, micro, Tender   |
|            8 |     1351 | 2025-08-16 | NRG            | L   | 0.863      | -            | -                | -                | -         |    -1.19 | arcade, arias, clipzera, Sathsea, Tender |
|            7 |     1489 | 2025-08-13 | MIGHT          | L   | 0.843      | -            | -                | -                | -         |   -20.15 | arcade, arias, clipzera, micro, Tender   |
|            6 |     1542 | 2025-08-12 | M80            | L   | 0.836      | -            | -                | -                | -         |    -1.21 | arcade, arias, clipzera, micro, Tender   |
|            5 |     1588 | 2025-08-11 | Wanted Goons   | W   | 0.830      | 0.363        | 0.000 (0.000)    | 0.220 (0.066)    | 0 (0.000) |     6.64 | arcade, arias, clipzera, micro, Tender   |
|            4 |     1822 | 2025-07-30 | NRG            | L   | 0.750      | -            | -                | -                | -         |    -1.12 | arias, clipzera, micro, misha, Tender    |
|            3 |     1847 | 2025-07-28 | Arrival Seven  | W   | 0.736      | 0.384        | 0.002 (0.001)    | 0.098 (0.028)    | 0 (0.000) |    10.23 | clipzera, flow, micro, misha, Tender     |
|            2 |     1909 | 2025-07-26 | Chicken Coop   | L   | 0.723      | -            | -                | -                | -         |    -9.94 | arias, clipzera, micro, misha, Tender    |
|            1 |     1929 | 2025-07-25 | Shimmer        | W   | 0.716      | 0.384        | 0.036 (0.010)    | 0.139 (0.038)    | 0 (0.000) |    14.21 | arias, clipzera, micro, misha, Tender    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,000.00)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-22 |      1.000 | $1,000.00      | $1,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
