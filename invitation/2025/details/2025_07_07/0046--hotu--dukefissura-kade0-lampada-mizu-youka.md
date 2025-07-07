### Roster Details<br />
Team Name: HOTU<br />
Roster: dukefissura, kade0, lampada, mizu, youka<br />
Global Rank: [46](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [32]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  1000.1<br />
<br />
Final Rank Value (1000.1) = Starting Rank Value (905.5) + Head To Head Adjustments (94.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.402[<sup>1</sup>](#table2)
- Bounty Collected: 0.406[<sup>2</sup>](#table1)
- Opponent Network: 0.056[<sup>2</sup>](#table1)
- LAN Wins: 0.219[<sup>2</sup>](#table1)

The average of these factors is 0.271<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 905.5
- 400 + ( ( 0.271 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 905.5


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
|           18 |      776 | 2025-05-12 | Ninjas in Pyjamas | L   | 0.830      | -            | -                | -                | -         |    -2.98 | dukefissura, kade0, lampada, mizu, youka |
|           17 |      797 | 2025-05-12 | GamerLegion       | W   | 0.825      | 1.000        | 0.390 (0.321)    | 0.395 (0.326)    | 1 (0.825) |    24.66 | dukefissura, kade0, lampada, mizu, youka |
|           16 |      818 | 2025-05-11 | Aurora            | L   | 0.819      | -            | -                | -                | -         |    -0.43 | dukefissura, kade0, lampada, mizu, youka |
|           15 |      842 | 2025-05-10 | paiN              | L   | 0.813      | -            | -                | -                | -         |    -1.59 | dukefissura, kade0, lampada, mizu, youka |
|           14 |     1825 | 2025-04-01 | JiJieHao          | W   | 0.552      | 0.143        | 0.059 (0.005)    | 0.336 (0.026)    | 0 (0.000) |    10.30 | dukefissura, kade0, lampada, mizu, youka |
|           13 |     1840 | 2025-03-31 | Rare Atom         | W   | 0.544      | 0.143        | 0.061 (0.005)    | 0.564 (0.044)    | 0 (0.000) |    14.12 | dukefissura, kade0, lampada, mizu, youka |
|           12 |     1870 | 2025-03-30 | The Huns          | W   | 0.538      | 0.143        | 0.043 (0.003)    | 0.343 (0.026)    | 0 (0.000) |     9.21 | dukefissura, kade0, lampada, mizu, youka |
|           11 |     1936 | 2025-03-29 | The Huns          | W   | 0.531      | 0.143        | 0.043 (0.003)    | 0.343 (0.026)    | 0 (0.000) |     9.40 | dukefissura, kade0, lampada, mizu, youka |
|           10 |     2000 | 2025-03-28 | Chinggis Warriors | W   | 0.524      | 0.143        | 0.033 (0.003)    | 0.551 (0.041)    | 0 (0.000) |    12.00 | dukefissura, kade0, lampada, mizu, youka |
|            9 |     2084 | 2025-03-26 | Eruption          | W   | 0.516      | 0.143        | 0.011 (0.001)    | 0.180 (0.013)    | 0 (0.000) |     5.95 | dukefissura, kade0, lampada, mizu, youka |
|            8 |     2601 | 2025-03-09 | Rare Atom         | L   | 0.398      | -            | -                | -                | -         |    -2.16 | kade0, lampada, mizu, Re1GN, youka       |
|            7 |     2675 | 2025-03-08 | Chinggis Warriors | W   | 0.392      | 0.143        | 0.033 (0.002)    | 0.551 (0.031)    | 1 (0.392) |     9.32 | kade0, lampada, mizu, Re1GN, youka       |
|            6 |     2739 | 2025-03-07 | JiJieHao          | W   | 0.385      | 0.143        | 0.059 (0.003)    | 0.336 (0.018)    | 1 (0.385) |     8.31 | kade0, lampada, mizu, Re1GN, youka       |
|            5 |     2749 | 2025-03-06 | Eruption          | W   | 0.383      | 0.143        | -                | 0.180 (0.010)    | 1 (0.383) |     4.77 | kade0, lampada, mizu, Re1GN, youka       |
|            4 |     2961 | 2025-02-27 | ATOX              | L   | 0.332      | -            | -                | -                | -         |    -8.97 | kade0, lampada, mizu, Re1GN, youka       |
|            3 |     3017 | 2025-02-26 | Chinggis Warriors | L   | 0.324      | -            | -                | -                | -         |    -2.56 | kade0, lampada, mizu, Re1GN, youka       |
|            2 |     3056 | 2025-02-25 | NomadS            | W   | 0.318      | 0.143        | 0.016 (0.001)    | -                | -         |     3.96 | kade0, lampada, mizu, Re1GN, youka       |
|            1 |     3090 | 2025-02-23 | ATOX              | W   | 0.310      | -            | -                | -                | -         |     1.24 | kade0, lampada, mizu, Re1GN, youka       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,240.95)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-18 |      0.866 | $18,750.00     | $16,240.95      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
