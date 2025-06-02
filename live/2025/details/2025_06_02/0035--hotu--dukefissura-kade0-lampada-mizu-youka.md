### Roster Details<br />
Team Name: HOTU<br />
Roster: dukefissura, kade0, lampada, mizu, youka<br />
Global Rank: [35](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [24]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  1104.7<br />
<br />
Final Rank Value (1104.7) = Starting Rank Value (984.6) + Head To Head Adjustments (120.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.421[<sup>1</sup>](#table2)
- Bounty Collected: 0.453[<sup>2</sup>](#table1)
- Opponent Network: 0.099[<sup>2</sup>](#table1)
- LAN Wins: 0.301[<sup>2</sup>](#table1)

The average of these factors is 0.319<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 984.6
- 400 + ( ( 0.319 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 984.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      317 | 2025-05-12 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -10.19 | dukefissura, kade0, lampada, mizu, youka |
|           17 |      337 | 2025-05-12 | GamerLegion       | W   | 1.000      | 1.000        | 0.568 (0.568)    | 0.531 (0.531)    | 1 (1.000) |    29.71 | dukefissura, kade0, lampada, mizu, youka |
|           16 |      358 | 2025-05-11 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -0.61 | dukefissura, kade0, lampada, mizu, youka |
|           15 |      382 | 2025-05-10 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -8.68 | dukefissura, kade0, lampada, mizu, youka |
|           14 |     1349 | 2025-04-01 | JiJieHao          | W   | 0.790      | 0.143        | 0.079 (0.009)    | 0.443 (0.050)    | 0 (0.000) |    12.82 | dukefissura, kade0, lampada, mizu, youka |
|           13 |     1364 | 2025-03-31 | Rare Atom         | W   | 0.782      | 0.143        | 0.074 (0.008)    | 0.703 (0.079)    | 0 (0.000) |    18.62 | dukefissura, kade0, lampada, mizu, youka |
|           12 |     1394 | 2025-03-30 | The Huns          | W   | 0.776      | 0.143        | 0.062 (0.007)    | 0.476 (0.053)    | 0 (0.000) |    13.18 | dukefissura, kade0, lampada, mizu, youka |
|           11 |     1460 | 2025-03-29 | The Huns          | W   | 0.769      | 0.143        | 0.062 (0.007)    | 0.476 (0.052)    | 0 (0.000) |    13.71 | dukefissura, kade0, lampada, mizu, youka |
|           10 |     1524 | 2025-03-28 | Chinggis Warriors | W   | 0.762      | 0.143        | 0.050 (0.005)    | 0.691 (0.075)    | 0 (0.000) |    16.89 | dukefissura, kade0, lampada, mizu, youka |
|            9 |     1608 | 2025-03-26 | Eruption          | W   | 0.754      | 0.143        | 0.018 (0.002)    | 0.266 (0.029)    | 0 (0.000) |     8.90 | dukefissura, kade0, lampada, mizu, youka |
|            8 |     2125 | 2025-03-09 | Rare Atom         | L   | 0.636      | -            | -                | -                | -         |    -4.50 | kade0, lampada, mizu, Re1GN, youka       |
|            7 |     2199 | 2025-03-08 | Chinggis Warriors | W   | 0.630      | 0.143        | 0.050 (0.005)    | 0.691 (0.062)    | 1 (0.630) |    14.97 | kade0, lampada, mizu, Re1GN, youka       |
|            6 |     2263 | 2025-03-07 | JiJieHao          | W   | 0.623      | 0.143        | 0.079 (0.007)    | 0.443 (0.039)    | 1 (0.623) |    12.88 | kade0, lampada, mizu, Re1GN, youka       |
|            5 |     2273 | 2025-03-06 | Eruption          | W   | 0.621      | 0.143        | -                | 0.266 (0.024)    | 1 (0.621) |     8.29 | kade0, lampada, mizu, Re1GN, youka       |
|            4 |     2485 | 2025-02-27 | ATOX              | L   | 0.570      | -            | -                | -                | -         |   -12.54 | kade0, lampada, mizu, Re1GN, youka       |
|            3 |     2541 | 2025-02-26 | Chinggis Warriors | L   | 0.562      | -            | -                | -                | -         |    -4.35 | kade0, lampada, mizu, Re1GN, youka       |
|            2 |     2580 | 2025-02-25 | NomadS            | W   | 0.556      | 0.143        | 0.021 (0.002)    | -                | -         |     6.47 | kade0, lampada, mizu, Re1GN, youka       |
|            1 |     2614 | 2025-02-23 | ATOX              | W   | 0.548      | -            | -                | -                | -         |     4.58 | kade0, lampada, mizu, Re1GN, youka       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,750.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-18 |      1.000 | $18,750.00     | $18,750.00      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
