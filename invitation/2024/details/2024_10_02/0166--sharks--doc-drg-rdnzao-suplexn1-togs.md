### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, drg, rdnzao, supLexN1, togs<br />
Global Rank: [166](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_02.md)<br />
Regional Rank: [48]( ../../standings_americas_2024_10_02.md)<br />
<br />
Final Rank Value:  661.2<br />
<br />
Final Rank Value (661.2) = Starting Rank Value (663.9) + Head To Head Adjustments (-2.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.330[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 663.9
- 400 + ( ( 0.138 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 663.9


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
|           10 |     4523 | 2024-04-26 | TYLOO    | L   | 0.140      | -            | -                | -                | -         |    -2.23 | doc, drg, rdnzao, supLexN1, togs  |
|            9 |     4555 | 2024-04-25 | M80      | L   | 0.133      | -            | -                | -                | -         |    -0.13 | doc, drg, rdnzao, supLexN1, togs  |
|            8 |     4595 | 2024-04-23 | Vitality | L   | 0.119      | -            | -                | -                | -         |    -0.00 | doc, drg, rdnzao, supLexN1, togs  |
|            7 |     4816 | 2024-04-16 | W7M      | L   | 0.074      | -            | -                | -                | -         |    -0.93 | doc, drg, rdnzao, supLexN1, togs  |
|            6 |     4884 | 2024-04-12 | Galorys  | L   | 0.047      | -            | -                | -                | -         |    -0.73 | doc, drg, rdnzao, supLexN1, togs  |
|            5 |     4933 | 2024-04-10 | ODDIK    | W   | 0.035      | 0.450        | 0.150 (0.002)    | 0.661 (0.010)    | 0 (0.000) |     0.99 | doc, drg, lukiz, rdnzao, supLexN1 |
|            4 |     4939 | 2024-04-10 | ODDIK    | L   | 0.034      | -            | -                | -                | -         |    -0.10 | doc, drg, lukiz, rdnzao, supLexN1 |
|            3 |     5038 | 2024-04-08 | paiN     | L   | 0.020      | -            | -                | -                | -         |    -0.00 | doc, drg, rdnzao, supLexN1, togs  |
|            2 |     5077 | 2024-04-07 | BESTIA   | W   | 0.012      | 0.435        | 0.080 (0.000)    | 0.763 (0.004)    | 0 (0.000) |     0.31 | doc, drg, rdnzao, supLexN1, togs  |
|            1 |     5088 | 2024-04-06 | ODDIK    | W   | 0.007      | 0.143        | 0.150 (0.000)    | 0.661 (0.001)    | 0 (0.000) |     0.19 | doc, drg, gafolo, supLexN1, togs  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,031.31)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.434 | $5,000.00      | $2,170.60       |
| 2024-05-12 |      0.246 | $3,500.00      | $860.71         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
