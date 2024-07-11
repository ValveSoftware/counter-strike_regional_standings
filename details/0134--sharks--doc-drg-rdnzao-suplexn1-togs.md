### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, drg, rdnzao, supLexN1, togs<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [134](../standings_global.md)<br />
Regional Rank: [38]( ../standings_americas.md)<br />
Final Rank Value:  776.5<br />
<br />
Final Rank Value (776.5) = Starting Rank Value (776.0) + Head To Head Adjustments (0.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.396[<sup>1</sup>](#table2)
- Bounty Collected: 0.280[<sup>2</sup>](#table1)
- Opponent Network: 0.037[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.178<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 776.0
- 400 + ( ( 0.178 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 776.0


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
|           15 |     1692 | 2024-04-26 | TYLOO    | L   | 0.694      | -            | -                | -                | -         |    -9.31 | doc, drg, rdnzao, supLexN1, togs  |
|           14 |     1724 | 2024-04-25 | M80      | L   | 0.687      | -            | -                | -                | -         |    -1.68 | doc, drg, rdnzao, supLexN1, togs  |
|           13 |     1764 | 2024-04-23 | Vitality | L   | 0.673      | -            | -                | -                | -         |    -0.03 | doc, drg, rdnzao, supLexN1, togs  |
|           12 |     1985 | 2024-04-16 | W7M      | L   | 0.628      | -            | -                | -                | -         |    -9.42 | doc, drg, rdnzao, supLexN1, togs  |
|           11 |     2053 | 2024-04-12 | Galorys  | L   | 0.601      | -            | -                | -                | -         |    -7.28 | doc, drg, rdnzao, supLexN1, togs  |
|           10 |     2102 | 2024-04-10 | ODDIK    | W   | 0.589      | 0.450        | 0.042 (0.011)    | 0.602 (0.160)    | 0 (0.000) |    12.65 | doc, drg, lukiz, rdnzao, supLexN1 |
|            9 |     2108 | 2024-04-10 | ODDIK    | L   | 0.588      | -            | -                | -                | -         |    -5.91 | doc, drg, lukiz, rdnzao, supLexN1 |
|            8 |     2207 | 2024-04-08 | paiN     | L   | 0.574      | -            | -                | -                | -         |    -0.22 | doc, drg, rdnzao, supLexN1, togs  |
|            7 |     2246 | 2024-04-07 | BESTIA   | W   | 0.566      | 0.435        | 0.050 (0.012)    | 0.657 (0.162)    | 0 (0.000) |    13.32 | doc, drg, rdnzao, supLexN1, togs  |
|            6 |     2257 | 2024-04-06 | ODDIK    | W   | 0.561      | 0.143        | 0.042 (0.003)    | 0.602 (0.048)    | 0 (0.000) |    12.94 | doc, drg, gafolo, supLexN1, togs  |
|            5 |     2277 | 2024-04-05 | paiN     | L   | 0.553      | -            | -                | -                | -         |    -0.17 | doc, drg, gafolo, supLexN1, togs  |
|            4 |     2295 | 2024-04-04 | paiN     | L   | 0.548      | -            | -                | -                | -         |    -0.17 | doc, drg, gafolo, supLexN1, togs  |
|            3 |     2303 | 2024-04-04 | paiN     | L   | 0.548      | -            | -                | -                | -         |    -0.17 | doc, drg, gafolo, supLexN1, togs  |
|            2 |     2381 | 2024-04-02 | BESTIA   | L   | 0.535      | -            | -                | -                | -         |    -3.88 | doc, drg, rdnzao, supLexN1, togs  |
|            1 |     2385 | 2024-04-02 | MIBR     | L   | 0.534      | -            | -                | -                | -         |    -0.21 | doc, drg, rdnzao, supLexN1, togs  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,739.79)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.988 | $5,000.00      | $4,940.30       |
| 2024-05-12 |      0.800 | $3,500.00      | $2,799.49       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
