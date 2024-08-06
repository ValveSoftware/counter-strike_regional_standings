### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, drg, rdnzao, supLexN1, togs<br />
Global Rank: [137](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [35]( ../standings_americas.md)<br />
<br />
Final Rank Value:  760.3<br />
<br />
Final Rank Value (760.3) = Starting Rank Value (758.3) + Head To Head Adjustments (2.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.369[<sup>1</sup>](#table2)
- Bounty Collected: 0.295[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.174<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 758.3
- 400 + ( ( 0.174 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 758.3


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
|           15 |     2594 | 2024-04-26 | TYLOO    | L   | 0.521      | -            | -                | -                | -         |    -8.13 | doc, drg, rdnzao, supLexN1, togs  |
|           14 |     2626 | 2024-04-25 | M80      | L   | 0.513      | -            | -                | -                | -         |    -1.12 | doc, drg, rdnzao, supLexN1, togs  |
|           13 |     2666 | 2024-04-23 | Vitality | L   | 0.500      | -            | -                | -                | -         |    -0.04 | doc, drg, rdnzao, supLexN1, togs  |
|           12 |     2887 | 2024-04-16 | W7M      | L   | 0.455      | -            | -                | -                | -         |    -5.96 | doc, drg, rdnzao, supLexN1, togs  |
|           11 |     2955 | 2024-04-12 | Galorys  | L   | 0.428      | -            | -                | -                | -         |    -4.47 | doc, drg, rdnzao, supLexN1, togs  |
|           10 |     3004 | 2024-04-10 | ODDIK    | W   | 0.415      | 0.450        | 0.099 (0.019)    | 0.805 (0.151)    | 0 (0.000) |     9.73 | doc, drg, lukiz, rdnzao, supLexN1 |
|            9 |     3010 | 2024-04-10 | ODDIK    | L   | 0.415      | -            | -                | -                | -         |    -3.37 | doc, drg, lukiz, rdnzao, supLexN1 |
|            8 |     3109 | 2024-04-08 | paiN     | L   | 0.401      | -            | -                | -                | -         |    -0.35 | doc, drg, rdnzao, supLexN1, togs  |
|            7 |     3148 | 2024-04-07 | BESTIA   | W   | 0.393      | 0.435        | 0.096 (0.016)    | 0.776 (0.132)    | 0 (0.000) |     9.63 | doc, drg, rdnzao, supLexN1, togs  |
|            6 |     3159 | 2024-04-06 | ODDIK    | W   | 0.387      | 0.143        | 0.099 (0.005)    | 0.805 (0.045)    | 0 (0.000) |     9.52 | doc, drg, gafolo, supLexN1, togs  |
|            5 |     3179 | 2024-04-05 | paiN     | L   | 0.380      | -            | -                | -                | -         |    -0.29 | doc, drg, gafolo, supLexN1, togs  |
|            4 |     3197 | 2024-04-04 | paiN     | L   | 0.375      | -            | -                | -                | -         |    -0.28 | doc, drg, gafolo, supLexN1, togs  |
|            3 |     3205 | 2024-04-04 | paiN     | L   | 0.375      | -            | -                | -                | -         |    -0.28 | doc, drg, gafolo, supLexN1, togs  |
|            2 |     3283 | 2024-04-02 | BESTIA   | L   | 0.362      | -            | -                | -                | -         |    -2.33 | doc, drg, rdnzao, supLexN1, togs  |
|            1 |     3287 | 2024-04-02 | MIBR     | L   | 0.361      | -            | -                | -                | -         |    -0.30 | doc, drg, rdnzao, supLexN1, togs  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,266.85)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.815 | $5,000.00      | $4,073.86       |
| 2024-05-12 |      0.627 | $3,500.00      | $2,192.99       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
