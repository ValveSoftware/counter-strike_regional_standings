### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, drg, rdnzao, supLexN1, togs<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [133](../standings_global.md)<br />
Regional Rank: [35]( ../standings_americas.md)<br />
Final Rank Value:  793.0<br />
<br />
Final Rank Value (793.0) = Starting Rank Value (789.8) + Head To Head Adjustments (3.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.397[<sup>1</sup>](#table2)
- Bounty Collected: 0.293[<sup>2</sup>](#table1)
- Opponent Network: 0.037[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.182<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 789.8
- 400 + ( ( 0.182 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 789.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1856 | 2024-04-26 | TYLOO    | L   | 0.654      | -            | -                | -                | -         |    -9.27 | doc, drg, rdnzao, supLexN1, togs  |
|           14 |     1888 | 2024-04-25 | M80      | L   | 0.647      | -            | -                | -                | -         |    -1.42 | doc, drg, rdnzao, supLexN1, togs  |
|           13 |     1928 | 2024-04-23 | Vitality | L   | 0.633      | -            | -                | -                | -         |    -0.03 | doc, drg, rdnzao, supLexN1, togs  |
|           12 |     2149 | 2024-04-16 | W7M      | L   | 0.589      | -            | -                | -                | -         |    -8.30 | doc, drg, rdnzao, supLexN1, togs  |
|           11 |     2217 | 2024-04-12 | Galorys  | L   | 0.562      | -            | -                | -                | -         |    -6.64 | doc, drg, rdnzao, supLexN1, togs  |
|           10 |     2266 | 2024-04-10 | ODDIK    | W   | 0.549      | 0.450        | 0.084 (0.021)    | 0.678 (0.168)    | 0 (0.000) |    12.67 | doc, drg, lukiz, rdnzao, supLexN1 |
|            9 |     2272 | 2024-04-10 | ODDIK    | L   | 0.549      | -            | -                | -                | -         |    -4.62 | doc, drg, lukiz, rdnzao, supLexN1 |
|            8 |     2371 | 2024-04-08 | paiN     | L   | 0.534      | -            | -                | -                | -         |    -0.22 | doc, drg, rdnzao, supLexN1, togs  |
|            7 |     2410 | 2024-04-07 | BESTIA   | W   | 0.526      | 0.435        | 0.050 (0.011)    | 0.645 (0.147)    | 0 (0.000) |    12.49 | doc, drg, rdnzao, supLexN1, togs  |
|            6 |     2421 | 2024-04-06 | ODDIK    | W   | 0.521      | 0.143        | 0.084 (0.006)    | 0.678 (0.050)    | 0 (0.000) |    12.81 | doc, drg, gafolo, supLexN1, togs  |
|            5 |     2441 | 2024-04-05 | paiN     | L   | 0.514      | -            | -                | -                | -         |    -0.17 | doc, drg, gafolo, supLexN1, togs  |
|            4 |     2459 | 2024-04-04 | paiN     | L   | 0.509      | -            | -                | -                | -         |    -0.17 | doc, drg, gafolo, supLexN1, togs  |
|            3 |     2467 | 2024-04-04 | paiN     | L   | 0.508      | -            | -                | -                | -         |    -0.17 | doc, drg, gafolo, supLexN1, togs  |
|            2 |     2545 | 2024-04-02 | BESTIA   | L   | 0.496      | -            | -                | -                | -         |    -3.50 | doc, drg, rdnzao, supLexN1, togs  |
|            1 |     2549 | 2024-04-02 | MIBR     | L   | 0.495      | -            | -                | -                | -         |    -0.22 | doc, drg, rdnzao, supLexN1, togs  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,403.11)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.948 | $5,000.00      | $4,742.25       |
| 2024-05-12 |      0.760 | $3,500.00      | $2,660.86       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
