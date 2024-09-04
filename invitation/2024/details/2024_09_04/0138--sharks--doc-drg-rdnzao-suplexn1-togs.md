### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, drg, rdnzao, supLexN1, togs<br />
Global Rank: [138](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_09_04.md)<br />
Regional Rank: [38]( ../../standings_americas_2024_09_04.md)<br />
<br />
Final Rank Value:  726.2<br />
<br />
Final Rank Value (726.2) = Starting Rank Value (725.0) + Head To Head Adjustments (1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.353[<sup>1</sup>](#table2)
- Bounty Collected: 0.285[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.164<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 725.0
- 400 + ( ( 0.164 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 725.0


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
|           15 |     3590 | 2024-04-26 | TYLOO    | L   | 0.328      | -            | -                | -                | -         |    -5.41 | doc, drg, rdnzao, supLexN1, togs  |
|           14 |     3622 | 2024-04-25 | M80      | L   | 0.320      | -            | -                | -                | -         |    -1.03 | doc, drg, rdnzao, supLexN1, togs  |
|           13 |     3662 | 2024-04-23 | Vitality | L   | 0.307      | -            | -                | -                | -         |    -0.01 | doc, drg, rdnzao, supLexN1, togs  |
|           12 |     3883 | 2024-04-16 | W7M      | L   | 0.262      | -            | -                | -                | -         |    -3.44 | doc, drg, rdnzao, supLexN1, togs  |
|           11 |     3951 | 2024-04-12 | Galorys  | L   | 0.235      | -            | -                | -                | -         |    -3.54 | doc, drg, rdnzao, supLexN1, togs  |
|           10 |     4000 | 2024-04-10 | ODDIK    | W   | 0.222      | 0.450        | 0.174 (0.017)    | 0.865 (0.087)    | 0 (0.000) |     6.27 | doc, drg, lukiz, rdnzao, supLexN1 |
|            9 |     4006 | 2024-04-10 | ODDIK    | L   | 0.222      | -            | -                | -                | -         |    -0.73 | doc, drg, lukiz, rdnzao, supLexN1 |
|            8 |     4105 | 2024-04-08 | paiN     | L   | 0.208      | -            | -                | -                | -         |    -0.03 | doc, drg, rdnzao, supLexN1, togs  |
|            7 |     4144 | 2024-04-07 | BESTIA   | W   | 0.200      | 0.435        | 0.101 (0.009)    | 0.832 (0.072)    | 0 (0.000) |     4.94 | doc, drg, rdnzao, supLexN1, togs  |
|            6 |     4155 | 2024-04-06 | ODDIK    | W   | 0.194      | 0.143        | 0.174 (0.005)    | 0.865 (0.024)    | 0 (0.000) |     5.57 | doc, drg, gafolo, supLexN1, togs  |
|            5 |     4175 | 2024-04-05 | paiN     | L   | 0.187      | -            | -                | -                | -         |    -0.02 | doc, drg, gafolo, supLexN1, togs  |
|            4 |     4193 | 2024-04-04 | paiN     | L   | 0.182      | -            | -                | -                | -         |    -0.02 | doc, drg, gafolo, supLexN1, togs  |
|            3 |     4201 | 2024-04-04 | paiN     | L   | 0.182      | -            | -                | -                | -         |    -0.02 | doc, drg, gafolo, supLexN1, togs  |
|            2 |     4279 | 2024-04-02 | BESTIA   | L   | 0.169      | -            | -                | -                | -         |    -1.07 | doc, drg, rdnzao, supLexN1, togs  |
|            1 |     4283 | 2024-04-02 | MIBR     | L   | 0.168      | -            | -                | -                | -         |    -0.17 | doc, drg, rdnzao, supLexN1, togs  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,626.37)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.622 | $5,000.00      | $3,108.88       |
| 2024-05-12 |      0.434 | $3,500.00      | $1,517.50       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
