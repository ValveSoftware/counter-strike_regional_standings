### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, drg, rdnzao, supLexN1, togs<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [134](../standings_global.md)<br />
Regional Rank: [35]( ../standings_americas.md)<br />
Final Rank Value:  768.4<br />
<br />
Final Rank Value (768.4) = Starting Rank Value (765.6) + Head To Head Adjustments (2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.385[<sup>1</sup>](#table2)
- Bounty Collected: 0.301[<sup>2</sup>](#table1)
- Opponent Network: 0.036[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.181<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 765.6
- 400 + ( ( 0.181 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 765.6


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
|           15 |     2144 | 2024-04-26 | TYLOO    | L   | 0.607      | -            | -                | -                | -         |    -9.32 | doc, drg, rdnzao, supLexN1, togs  |
|           14 |     2176 | 2024-04-25 | M80      | L   | 0.600      | -            | -                | -                | -         |    -1.03 | doc, drg, rdnzao, supLexN1, togs  |
|           13 |     2216 | 2024-04-23 | Vitality | L   | 0.586      | -            | -                | -                | -         |    -0.04 | doc, drg, rdnzao, supLexN1, togs  |
|           12 |     2437 | 2024-04-16 | W7M      | L   | 0.542      | -            | -                | -                | -         |    -7.15 | doc, drg, rdnzao, supLexN1, togs  |
|           11 |     2505 | 2024-04-12 | Galorys  | L   | 0.515      | -            | -                | -                | -         |    -6.06 | doc, drg, rdnzao, supLexN1, togs  |
|           10 |     2554 | 2024-04-10 | ODDIK    | W   | 0.502      | 0.450        | 0.083 (0.019)    | 0.694 (0.157)    | 0 (0.000) |    11.53 | doc, drg, lukiz, rdnzao, supLexN1 |
|            9 |     2560 | 2024-04-10 | ODDIK    | L   | 0.501      | -            | -                | -                | -         |    -4.29 | doc, drg, lukiz, rdnzao, supLexN1 |
|            8 |     2659 | 2024-04-08 | paiN     | L   | 0.487      | -            | -                | -                | -         |    -0.30 | doc, drg, rdnzao, supLexN1, togs  |
|            7 |     2698 | 2024-04-07 | BESTIA   | W   | 0.479      | 0.435        | 0.114 (0.024)    | 0.740 (0.154)    | 0 (0.000) |    11.77 | doc, drg, rdnzao, supLexN1, togs  |
|            6 |     2709 | 2024-04-06 | ODDIK    | W   | 0.474      | 0.143        | 0.083 (0.006)    | 0.694 (0.047)    | 0 (0.000) |    11.54 | doc, drg, gafolo, supLexN1, togs  |
|            5 |     2729 | 2024-04-05 | paiN     | L   | 0.466      | -            | -                | -                | -         |    -0.24 | doc, drg, gafolo, supLexN1, togs  |
|            4 |     2747 | 2024-04-04 | paiN     | L   | 0.461      | -            | -                | -                | -         |    -0.24 | doc, drg, gafolo, supLexN1, togs  |
|            3 |     2755 | 2024-04-04 | paiN     | L   | 0.461      | -            | -                | -                | -         |    -0.24 | doc, drg, gafolo, supLexN1, togs  |
|            2 |     2833 | 2024-04-02 | BESTIA   | L   | 0.449      | -            | -                | -                | -         |    -2.83 | doc, drg, rdnzao, supLexN1, togs  |
|            1 |     2837 | 2024-04-02 | MIBR     | L   | 0.448      | -            | -                | -                | -         |    -0.30 | doc, drg, rdnzao, supLexN1, togs  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,001.69)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.901 | $5,000.00      | $4,506.12       |
| 2024-05-12 |      0.713 | $3,500.00      | $2,495.57       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
