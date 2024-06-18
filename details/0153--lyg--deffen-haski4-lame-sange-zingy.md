### Roster Details<br />
Team Name: LYG<br />
Roster: DeFFeN, Haski4, lame, Sange, ZinGY<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [153](../standings_global.md)<br />
Regional Rank: [98]( ../standings_europe.md)<br />
Final Rank Value:  703.8<br />
<br />
Final Rank Value (703.8) = Starting Rank Value (727.9) + Head To Head Adjustments (-24.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.303[<sup>1</sup>](#table2)
- Bounty Collected: 0.334[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.161<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 727.9
- 400 + ( ( 0.161 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 727.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      501 | 2024-06-05 | Clutch      | L   | 1.000      | -            | -                | -                | -         |   -16.65 | DeFFeN, Haski4, lame, Sange, ZinGY |
|            9 |      546 | 2024-06-04 | TYLOO       | L   | 1.000      | -            | -                | -                | -         |   -10.94 | DeFFeN, Haski4, lame, Sange, ZinGY |
|            8 |     1842 | 2024-04-17 | NKT         | L   | 0.787      | -            | -                | -                | -         |   -19.64 | AceX, Haski4, lame, Sange, ZinGY   |
|            7 |     2241 | 2024-04-03 | The MongolZ | L   | 0.693      | -            | -                | -                | -         |    -0.05 | AceX, Haski4, lame, Sange, ZinGY   |
|            6 |     2268 | 2024-04-02 | Lynn Vision | L   | 0.688      | -            | -                | -                | -         |    -1.77 | AceX, Haski4, lame, Sange, ZinGY   |
|            5 |     2273 | 2024-04-02 | The MongolZ | W   | 0.687      | 0.143        | 0.986 (0.097)    | 0.681 (0.067)    | 0 (0.000) |    21.60 | AceX, Haski4, lame, Sange, ZinGY   |
|            4 |     2633 | 2024-03-13 | TYLOO       | W   | 0.554      | 0.143        | 0.049 (0.004)    | 0.241 (0.019)    | 0 (0.000) |    11.14 | AceX, Haski4, lame, Sange, ZinGY   |
|            3 |     2638 | 2024-03-13 | The Huns    | W   | 0.554      | 0.143        | 0.000 (0.000)    | 0.065 (0.005)    | 0 (0.000) |     4.59 | AceX, Haski4, lame, Sange, ZinGY   |
|            2 |     3216 | 2024-02-16 | Arcade      | L   | 0.385      | -            | -                | -                | -         |    -6.80 | AceX, Haski4, lame, Sange, ZinGY   |
|            1 |     3656 | 2024-01-24 | Wings Up    | L   | 0.228      | -            | -                | -                | -         |    -5.59 | AceX, Haski4, lame, Sange, ZinGY   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,495.66)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $1,300.00      | $1,300.00       |
| 2024-02-17 |      0.391 | $500.00        | $195.66         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
