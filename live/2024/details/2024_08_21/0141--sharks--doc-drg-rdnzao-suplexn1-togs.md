### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, drg, rdnzao, supLexN1, togs<br />
Global Rank: [141](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_08_21.md)<br />
Regional Rank: [38]( ../../standings_americas_2024_08_21.md)<br />
<br />
Final Rank Value:  745.9<br />
<br />
Final Rank Value (745.9) = Starting Rank Value (741.7) + Head To Head Adjustments (4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.363[<sup>1</sup>](#table2)
- Bounty Collected: 0.302[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.172<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 741.7
- 400 + ( ( 0.172 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 741.7


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
|           15 |     3094 | 2024-04-26 | TYLOO    | L   | 0.420      | -            | -                | -                | -         |    -6.91 | doc, drg, rdnzao, supLexN1, togs  |
|           14 |     3126 | 2024-04-25 | M80      | L   | 0.412      | -            | -                | -                | -         |    -1.15 | doc, drg, rdnzao, supLexN1, togs  |
|           13 |     3166 | 2024-04-23 | Vitality | L   | 0.399      | -            | -                | -                | -         |    -0.01 | doc, drg, rdnzao, supLexN1, togs  |
|           12 |     3387 | 2024-04-16 | W7M      | L   | 0.354      | -            | -                | -                | -         |    -4.79 | doc, drg, rdnzao, supLexN1, togs  |
|           11 |     3455 | 2024-04-12 | Galorys  | L   | 0.327      | -            | -                | -                | -         |    -3.62 | doc, drg, rdnzao, supLexN1, togs  |
|           10 |     3504 | 2024-04-10 | ODDIK    | W   | 0.315      | 0.450        | 0.187 (0.027)    | 0.749 (0.106)    | 0 (0.000) |     8.76 | doc, drg, lukiz, rdnzao, supLexN1 |
|            9 |     3510 | 2024-04-10 | ODDIK    | L   | 0.314      | -            | -                | -                | -         |    -1.15 | doc, drg, lukiz, rdnzao, supLexN1 |
|            8 |     3609 | 2024-04-08 | paiN     | L   | 0.300      | -            | -                | -                | -         |    -0.10 | doc, drg, rdnzao, supLexN1, togs  |
|            7 |     3648 | 2024-04-07 | BESTIA   | W   | 0.292      | 0.435        | 0.113 (0.014)    | 0.804 (0.102)    | 0 (0.000) |     7.13 | doc, drg, rdnzao, supLexN1, togs  |
|            6 |     3659 | 2024-04-06 | ODDIK    | W   | 0.286      | 0.143        | 0.187 (0.008)    | 0.749 (0.031)    | 0 (0.000) |     8.19 | doc, drg, gafolo, supLexN1, togs  |
|            5 |     3679 | 2024-04-05 | paiN     | L   | 0.279      | -            | -                | -                | -         |    -0.08 | doc, drg, gafolo, supLexN1, togs  |
|            4 |     3697 | 2024-04-04 | paiN     | L   | 0.274      | -            | -                | -                | -         |    -0.08 | doc, drg, gafolo, supLexN1, togs  |
|            3 |     3705 | 2024-04-04 | paiN     | L   | 0.274      | -            | -                | -                | -         |    -0.08 | doc, drg, gafolo, supLexN1, togs  |
|            2 |     3783 | 2024-04-02 | BESTIA   | L   | 0.261      | -            | -                | -                | -         |    -1.69 | doc, drg, rdnzao, supLexN1, togs  |
|            1 |     3787 | 2024-04-02 | MIBR     | L   | 0.260      | -            | -                | -                | -         |    -0.26 | doc, drg, rdnzao, supLexN1, togs  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,409.90)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.714 | $5,000.00      | $3,569.77       |
| 2024-05-12 |      0.526 | $3,500.00      | $1,840.13       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
