### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, drg, rdnzao, supLexN1, togs<br />
Global Rank: [142](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [38]( ../standings_americas.md)<br />
<br />
Final Rank Value:  741.3<br />
<br />
Final Rank Value (741.3) = Starting Rank Value (738.5) + Head To Head Adjustments (2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.365[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.172<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 738.5
- 400 + ( ( 0.172 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 738.5


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
|           15 |     2867 | 2024-04-26 | TYLOO    | L   | 0.466      | -            | -                | -                | -         |    -7.46 | doc, drg, rdnzao, supLexN1, togs  |
|           14 |     2899 | 2024-04-25 | M80      | L   | 0.459      | -            | -                | -                | -         |    -1.19 | doc, drg, rdnzao, supLexN1, togs  |
|           13 |     2939 | 2024-04-23 | Vitality | L   | 0.445      | -            | -                | -                | -         |    -0.03 | doc, drg, rdnzao, supLexN1, togs  |
|           12 |     3160 | 2024-04-16 | W7M      | L   | 0.401      | -            | -                | -                | -         |    -5.31 | doc, drg, rdnzao, supLexN1, togs  |
|           11 |     3228 | 2024-04-12 | Galorys  | L   | 0.374      | -            | -                | -                | -         |    -4.02 | doc, drg, rdnzao, supLexN1, togs  |
|           10 |     3277 | 2024-04-10 | ODDIK    | W   | 0.361      | 0.450        | 0.097 (0.016)    | 0.822 (0.134)    | 0 (0.000) |     8.93 | doc, drg, lukiz, rdnzao, supLexN1 |
|            9 |     3283 | 2024-04-10 | ODDIK    | L   | 0.361      | -            | -                | -                | -         |    -2.46 | doc, drg, lukiz, rdnzao, supLexN1 |
|            8 |     3382 | 2024-04-08 | paiN     | L   | 0.347      | -            | -                | -                | -         |    -0.10 | doc, drg, rdnzao, supLexN1, togs  |
|            7 |     3421 | 2024-04-07 | BESTIA   | W   | 0.339      | 0.435        | 0.112 (0.016)    | 0.880 (0.129)    | 0 (0.000) |     8.28 | doc, drg, rdnzao, supLexN1, togs  |
|            6 |     3432 | 2024-04-06 | ODDIK    | W   | 0.333      | 0.143        | 0.097 (0.005)    | 0.822 (0.039)    | 0 (0.000) |     8.64 | doc, drg, gafolo, supLexN1, togs  |
|            5 |     3452 | 2024-04-05 | paiN     | L   | 0.326      | -            | -                | -                | -         |    -0.08 | doc, drg, gafolo, supLexN1, togs  |
|            4 |     3470 | 2024-04-04 | paiN     | L   | 0.321      | -            | -                | -                | -         |    -0.08 | doc, drg, gafolo, supLexN1, togs  |
|            3 |     3478 | 2024-04-04 | paiN     | L   | 0.321      | -            | -                | -                | -         |    -0.08 | doc, drg, gafolo, supLexN1, togs  |
|            2 |     3556 | 2024-04-02 | BESTIA   | L   | 0.308      | -            | -                | -                | -         |    -1.97 | doc, drg, rdnzao, supLexN1, togs  |
|            1 |     3560 | 2024-04-02 | MIBR     | L   | 0.307      | -            | -                | -                | -         |    -0.26 | doc, drg, rdnzao, supLexN1, togs  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,807.18)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.761 | $5,000.00      | $3,803.47       |
| 2024-05-12 |      0.572 | $3,500.00      | $2,003.71       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
