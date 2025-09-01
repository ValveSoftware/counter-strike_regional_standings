### Roster Details<br />
Team Name: anything else<br />
Roster: cypress, FAME, K4mr0, mcniff, Slash<br />
Global Rank: [200](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_09_01.md)<br />
Regional Rank: [61]( ../../standings_americas_2025_09_01.md)<br />
<br />
Final Rank Value:  596.3<br />
<br />
Final Rank Value (596.3) = Starting Rank Value (619.3) + Head To Head Adjustments (-23.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.256[<sup>1</sup>](#table2)
- Bounty Collected: 0.182[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.114<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 619.3
- 400 + ( ( 0.114 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 619.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      383 | 2025-08-13 | Wanted Goons     | L   | 1.000      | -            | -                | -                | -         |   -16.39 | cypress, FAME, K4mr0, mcniff, Slash  |
|           16 |      431 | 2025-08-12 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -1.60 | cypress, FAME, K4mr0, mcniff, Slash  |
|           15 |      467 | 2025-08-11 | MIGHT            | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.224 (0.081)    | 0 (0.000) |    15.18 | cypress, FAME, K4mr0, mcniff, Slash  |
|           14 |     1068 | 2025-07-11 | Getting Info     | L   | 0.856      | -            | -                | -                | -         |    -6.24 | cypress, FAME, mcniff, Slash, Weeza  |
|           13 |     1082 | 2025-07-11 | TSG              | W   | 0.854      | 0.143        | 0.000 (0.000)    | 0.007 (0.001)    | 0 (0.000) |     6.53 | cypress, FAME, mcniff, Slash, Weeza  |
|           12 |     1469 | 2025-06-12 | girl kissers     | L   | 0.663      | -            | -                | -                | -         |   -10.63 | cypress, FAME, K4mr0, mcniff, Slash  |
|           11 |     1514 | 2025-06-10 | Subtick          | L   | 0.650      | -            | -                | -                | -         |   -13.83 | cypress, FAME, K4mr0, mcniff, Slash  |
|           10 |     1519 | 2025-06-10 | MONEY CREW       | L   | 0.648      | -            | -                | -                | -         |    -9.36 | cypress, FAME, K4mr0, mcniff, Slash  |
|            9 |     1929 | 2025-05-14 | Wildcard         | L   | 0.469      | -            | -                | -                | -         |    -1.79 | cypress, FAME, K4mr0, mcniff, Slash  |
|            8 |     1996 | 2025-05-12 | MIGHT            | W   | 0.455      | 0.384        | 0.000 (0.000)    | 0.224 (0.039)    | 0 (0.000) |     6.99 | Calix, cypress, K4mr0, mcniff, Slash |
|            7 |     2052 | 2025-05-10 | Legacy           | L   | 0.441      | -            | -                | -                | -         |    -0.36 | cypress, FAME, K4mr0, mcniff, Slash  |
|            6 |     2094 | 2025-05-08 | MIGHT            | W   | 0.430      | 0.384        | 0.000 (0.000)    | 0.224 (0.037)    | 0 (0.000) |     6.65 | cypress, FAME, K4mr0, mcniff, Slash  |
|            5 |     3409 | 2025-03-23 | JERSA            | L   | 0.124      | -            | -                | -                | -         |    -2.55 | cypress, FAME, K4mr0, mcniff, Slash  |
|            4 |     3454 | 2025-03-21 | Marca Registrada | W   | 0.110      | 0.372        | 0.001 (0.000)    | 0.301 (0.012)    | 0 (0.000) |     1.92 | cypress, FAME, K4mr0, mcniff, Slash  |
|            3 |     3494 | 2025-03-19 | Legacy Kingdom   | W   | 0.096      | 0.372        | 0.001 (0.000)    | 0.259 (0.009)    | 0 (0.000) |     1.68 | cypress, FAME, K4mr0, mcniff, Slash  |
|            2 |     3584 | 2025-03-17 | Wanted Goons     | W   | 0.083      | 0.372        | 0.000 (0.000)    | 0.152 (0.005)    | 0 (0.000) |     1.28 | cypress, FAME, K4mr0, mcniff, Slash  |
|            1 |     3723 | 2025-03-10 | Marca Registrada | L   | 0.036      | -            | -                | -                | -         |    -0.50 | cypress, FAME, K4mr0, mcniff, Slash  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($531.73)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-23 |      0.124 | $4,300.00      | $531.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
