### Roster Details<br />
Team Name: Chinggis Warriors<br />
Roster: fury5k, NEUZ, sergelen19k, xerolte, Zilkenberg<br />
Global Rank: [112](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_11_06.md)<br />
Regional Rank: [8]( ../../standings_asia_2024_11_06.md)<br />
<br />
Final Rank Value:  794.8<br />
<br />
Final Rank Value (794.8) = Starting Rank Value (798.3) + Head To Head Adjustments (-3.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.303[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.242[<sup>2</sup>](#table1)

The average of these factors is 0.203<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 798.3
- 400 + ( ( 0.203 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 798.3


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
|           15 |      964 | 2024-09-27 | IHC          | L   | 0.933      | -            | -                | -                | -         |    -8.44 | fury5k, NEUZ, sergelen19k, xerolte, Zilkenberg |
|           14 |      971 | 2024-09-27 | ATOX         | W   | 0.932      | 0.143        | 0.029 (0.004)    | 0.280 (0.037)    | 1 (0.932) |    22.65 | fury5k, NEUZ, sergelen19k, xerolte, Zilkenberg |
|           13 |     1828 | 2024-08-30 | ATOX         | L   | 0.745      | -            | -                | -                | -         |    -4.91 | fury5k, NEUZ, sergelen19k, xerolte, Zilkenberg |
|           12 |     1876 | 2024-08-29 | GR           | L   | 0.738      | -            | -                | -                | -         |   -15.16 | fury5k, NEUZ, sergelen19k, xerolte, Zilkenberg |
|           11 |     1928 | 2024-08-28 | THE          | W   | 0.732      | 0.143        | 0.000 (0.000)    | 0.080 (0.008)    | 0 (0.000) |     4.50 | fury5k, NEUZ, sergelen19k, xerolte, Zilkenberg |
|           10 |     2703 | 2024-08-06 | TYLOO        | L   | 0.586      | -            | -                | -                | -         |    -4.84 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            9 |     2736 | 2024-08-05 | Lynn Vision  | W   | 0.579      | 0.380        | 0.036 (0.008)    | 0.215 (0.047)    | 1 (0.579) |    12.80 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            8 |     2808 | 2024-08-03 | Steel Helmet | W   | 0.565      | 0.380        | 0.000 (0.000)    | 0.026 (0.006)    | 1 (0.565) |     1.74 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            7 |     3583 | 2024-07-12 | Alter Ego    | L   | 0.419      | -            | -                | -                | -         |   -10.84 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            6 |     3587 | 2024-07-12 | TYLOO        | L   | 0.419      | -            | -                | -                | -         |    -3.52 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            5 |     3588 | 2024-07-12 | GR           | W   | 0.418      | 0.143        | 0.004 (0.000)    | 0.191 (0.011)    | 0 (0.000) |     4.48 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            4 |     4367 | 2024-06-01 | Aurora       | L   | 0.145      | -            | -                | -                | -         |    -0.64 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            3 |     4416 | 2024-05-30 | OG           | W   | 0.133      | 0.500        | 0.006 (0.000)    | 0.000 (0.000)    | 1 (0.133) |     0.84 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            2 |     4445 | 2024-05-28 | BLEED        | L   | 0.124      | -            | -                | -                | -         |    -2.19 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |
|            1 |     4772 | 2024-05-17 | The MongolZ  | L   | 0.044      | -            | -                | -                | -         |    -0.00 | fury5k, NEUZ, starDUST, xerolte, Zilkenberg    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,418.24)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
