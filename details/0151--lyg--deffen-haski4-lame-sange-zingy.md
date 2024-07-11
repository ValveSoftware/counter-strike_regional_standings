### Roster Details<br />
Team Name: LYG<br />
Roster: DeFFeN, Haski4, lame, Sange, ZinGY<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [151](../standings_global.md)<br />
Regional Rank: [98]( ../standings_europe.md)<br />
Final Rank Value:  712.7<br />
<br />
Final Rank Value (712.7) = Starting Rank Value (734.9) + Head To Head Adjustments (-22.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.322[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.159<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 734.9
- 400 + ( ( 0.159 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 734.9


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
|           10 |      637 | 2024-06-05 | Clutch      | L   | 0.959      | -            | -                | -                | -         |   -15.80 | DeFFeN, Haski4, lame, Sange, ZinGY |
|            9 |      682 | 2024-06-04 | TYLOO       | L   | 0.952      | -            | -                | -                | -         |   -10.48 | DeFFeN, Haski4, lame, Sange, ZinGY |
|            8 |     1976 | 2024-04-17 | NKT         | L   | 0.631      | -            | -                | -                | -         |   -15.87 | AceX, Haski4, lame, Sange, ZinGY   |
|            7 |     2375 | 2024-04-03 | The MongolZ | L   | 0.538      | -            | -                | -                | -         |    -0.03 | AceX, Haski4, lame, Sange, ZinGY   |
|            6 |     2402 | 2024-04-02 | Lynn Vision | L   | 0.532      | -            | -                | -                | -         |    -1.62 | AceX, Haski4, lame, Sange, ZinGY   |
|            5 |     2407 | 2024-04-02 | The MongolZ | W   | 0.531      | 0.143        | 1.000 (0.076)    | 0.692 (0.053)    | 0 (0.000) |    16.72 | AceX, Haski4, lame, Sange, ZinGY   |
|            4 |     2766 | 2024-03-13 | TYLOO       | W   | 0.399      | 0.143        | 0.050 (0.003)    | 0.240 (0.014)    | 0 (0.000) |     8.00 | AceX, Haski4, lame, Sange, ZinGY   |
|            3 |     2771 | 2024-03-13 | The Huns    | W   | 0.398      | 0.143        | 0.000 (0.000)    | 0.024 (0.001)    | 0 (0.000) |     2.79 | AceX, Haski4, lame, Sange, ZinGY   |
|            2 |     3349 | 2024-02-16 | Arcade      | L   | 0.230      | -            | -                | -                | -         |    -4.13 | AceX, Haski4, lame, Sange, ZinGY   |
|            1 |     3789 | 2024-01-24 | Wings Up    | L   | 0.072      | -            | -                | -                | -         |    -1.80 | AceX, Haski4, lame, Sange, ZinGY   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,399.42)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.986 | $1,300.00      | $1,281.59       |
| 2024-02-17 |      0.236 | $500.00        | $117.82         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
