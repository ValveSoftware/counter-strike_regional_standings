### Roster Details<br />
Team Name: Chinggis Warriors<br />
Roster: fury5k, NEUZ, sergelen19k, xerolte, Zilkenberg<br />
Global Rank: [116](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_30.md)<br />
Regional Rank: [9]( ../../standings_asia_2024_10_30.md)<br />
<br />
Final Rank Value:  823.0<br />
<br />
Final Rank Value (823.0) = Starting Rank Value (837.3) + Head To Head Adjustments (-14.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.337[<sup>1</sup>](#table2)
- Bounty Collected: 0.266[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.270[<sup>2</sup>](#table1)

The average of these factors is 0.220<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 837.3
- 400 + ( ( 0.220 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 837.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      823 | 2024-09-27 | IHC          | L   | 0.979      | -            | -                | -                | -         |    -8.43 | fury5k, NEUZ, sergelen19k, xerolte, Zilkenberg |
|           14 |      830 | 2024-09-27 | ATOX         | W   | 0.978      | 0.143        | 0.038 (0.005)    | 0.270 (0.038)    | 1 (0.978) |    24.34 | fury5k, NEUZ, sergelen19k, xerolte, Zilkenberg |
|           13 |     1687 | 2024-08-30 | ATOX         | L   | 0.791      | -            | -                | -                | -         |    -4.76 | fury5k, NEUZ, sergelen19k, xerolte, Zilkenberg |
|           12 |     1735 | 2024-08-29 | GR           | L   | 0.785      | -            | -                | -                | -         |   -16.76 | fury5k, NEUZ, sergelen19k, xerolte, Zilkenberg |
|           11 |     1787 | 2024-08-28 | THE          | W   | 0.778      | 0.143        | 0.000 (0.000)    | 0.079 (0.009)    | 0 (0.000) |     4.44 | fury5k, NEUZ, sergelen19k, xerolte, Zilkenberg |
|           10 |     2562 | 2024-08-06 | TYLOO        | L   | 0.632      | -            | -                | -                | -         |    -8.28 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            9 |     2595 | 2024-08-05 | Lynn Vision  | W   | 0.625      | 0.380        | 0.044 (0.011)    | 0.142 (0.034)    | 1 (0.625) |    10.63 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            8 |     2667 | 2024-08-03 | Steel Helmet | W   | 0.611      | 0.380        | 0.000 (0.000)    | 0.026 (0.006)    | 1 (0.611) |     1.58 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            7 |     3442 | 2024-07-12 | Alter Ego    | L   | 0.466      | -            | -                | -                | -         |   -12.31 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            6 |     3446 | 2024-07-12 | TYLOO        | L   | 0.465      | -            | -                | -                | -         |    -6.75 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            5 |     3447 | 2024-07-12 | GR           | W   | 0.465      | 0.143        | 0.008 (0.001)    | 0.116 (0.008)    | 0 (0.000) |     4.43 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            4 |     4226 | 2024-06-01 | Aurora       | L   | 0.191      | -            | -                | -                | -         |    -0.66 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            3 |     4275 | 2024-05-30 | OG           | W   | 0.179      | 0.500        | 0.013 (0.001)    | 0.000 (0.000)    | 1 (0.179) |     1.04 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            2 |     4304 | 2024-05-28 | BLEED        | L   | 0.170      | -            | -                | -                | -         |    -2.79 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            1 |     4631 | 2024-05-17 | The MongolZ  | L   | 0.091      | -            | -                | -                | -         |    -0.01 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,608.85)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
