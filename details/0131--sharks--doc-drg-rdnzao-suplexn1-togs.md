### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, drg, rdnzao, supLexN1, togs<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [131](../standings_global.md)<br />
Regional Rank: [35]( ../standings_americas.md)<br />
Final Rank Value:  769.1<br />
<br />
Final Rank Value (769.1) = Starting Rank Value (766.7) + Head To Head Adjustments (2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.391[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.180<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 766.7
- 400 + ( ( 0.180 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 766.7


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
|           15 |     1558 | 2024-04-26 | TYLOO    | L   | 0.849      | -            | -                | -                | -         |   -11.40 | doc, drg, rdnzao, supLexN1, togs  |
|           14 |     1590 | 2024-04-25 | M80      | L   | 0.842      | -            | -                | -                | -         |    -2.04 | doc, drg, rdnzao, supLexN1, togs  |
|           13 |     1630 | 2024-04-23 | Vitality | L   | 0.828      | -            | -                | -                | -         |    -0.04 | doc, drg, rdnzao, supLexN1, togs  |
|           12 |     1851 | 2024-04-16 | W7M      | L   | 0.784      | -            | -                | -                | -         |   -11.17 | doc, drg, rdnzao, supLexN1, togs  |
|           11 |     1919 | 2024-04-12 | Galorys  | L   | 0.757      | -            | -                | -                | -         |    -9.30 | doc, drg, rdnzao, supLexN1, togs  |
|           10 |     1968 | 2024-04-10 | ODDIK    | W   | 0.744      | 0.450        | 0.040 (0.013)    | 0.558 (0.187)    | 0 (0.000) |    15.91 | doc, drg, lukiz, rdnzao, supLexN1 |
|            9 |     1974 | 2024-04-10 | ODDIK    | L   | 0.744      | -            | -                | -                | -         |    -7.46 | doc, drg, lukiz, rdnzao, supLexN1 |
|            8 |     2073 | 2024-04-08 | paiN     | L   | 0.730      | -            | -                | -                | -         |    -0.25 | doc, drg, rdnzao, supLexN1, togs  |
|            7 |     2112 | 2024-04-07 | BESTIA   | W   | 0.722      | 0.435        | 0.052 (0.016)    | 0.594 (0.186)    | 0 (0.000) |    17.01 | doc, drg, rdnzao, supLexN1, togs  |
|            6 |     2123 | 2024-04-06 | ODDIK    | W   | 0.716      | 0.143        | 0.040 (0.004)    | 0.558 (0.057)    | 0 (0.000) |    16.74 | doc, drg, gafolo, supLexN1, togs  |
|            5 |     2143 | 2024-04-05 | paiN     | L   | 0.709      | -            | -                | -                | -         |    -0.18 | doc, drg, gafolo, supLexN1, togs  |
|            4 |     2161 | 2024-04-04 | paiN     | L   | 0.704      | -            | -                | -                | -         |    -0.18 | doc, drg, gafolo, supLexN1, togs  |
|            3 |     2169 | 2024-04-04 | paiN     | L   | 0.704      | -            | -                | -                | -         |    -0.18 | doc, drg, gafolo, supLexN1, togs  |
|            2 |     2247 | 2024-04-02 | BESTIA   | L   | 0.691      | -            | -                | -                | -         |    -4.82 | doc, drg, rdnzao, supLexN1, togs  |
|            1 |     2251 | 2024-04-02 | MIBR     | L   | 0.690      | -            | -                | -                | -         |    -0.24 | doc, drg, rdnzao, supLexN1, togs  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,344.35)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-12 |      0.956 | $3,500.00      | $3,344.35       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
