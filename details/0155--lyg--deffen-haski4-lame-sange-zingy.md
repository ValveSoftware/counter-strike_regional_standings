### Roster Details<br />
Team Name: LYG<br />
Roster: DeFFeN, Haski4, lame, Sange, ZinGY<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [155](../standings_global.md)<br />
Regional Rank: [102]( ../standings_europe.md)<br />
Final Rank Value:  713.1<br />
<br />
Final Rank Value (713.1) = Starting Rank Value (738.0) + Head To Head Adjustments (-25.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.318[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 738.0
- 400 + ( ( 0.157 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 738.0


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
|           10 |      801 | 2024-06-05 | Clutch      | L   | 0.919      | -            | -                | -                | -         |   -15.00 | DeFFeN, Haski4, lame, Sange, ZinGY |
|            9 |      846 | 2024-06-04 | TYLOO       | L   | 0.913      | -            | -                | -                | -         |   -14.04 | DeFFeN, Haski4, lame, Sange, ZinGY |
|            8 |     2140 | 2024-04-17 | NKT         | L   | 0.592      | -            | -                | -                | -         |   -14.91 | AceX, Haski4, lame, Sange, ZinGY   |
|            7 |     2539 | 2024-04-03 | The MongolZ | L   | 0.498      | -            | -                | -                | -         |    -0.02 | AceX, Haski4, lame, Sange, ZinGY   |
|            6 |     2566 | 2024-04-02 | Lynn Vision | L   | 0.493      | -            | -                | -                | -         |    -1.70 | AceX, Haski4, lame, Sange, ZinGY   |
|            5 |     2571 | 2024-04-02 | The MongolZ | W   | 0.492      | 0.143        | 1.000 (0.070)    | 0.653 (0.046)    | 0 (0.000) |    15.47 | AceX, Haski4, lame, Sange, ZinGY   |
|            4 |     2930 | 2024-03-13 | TYLOO       | W   | 0.359      | 0.143        | 0.032 (0.002)    | 0.141 (0.007)    | 0 (0.000) |     7.15 | AceX, Haski4, lame, Sange, ZinGY   |
|            3 |     2935 | 2024-03-13 | The Huns    | W   | 0.358      | 0.143        | 0.000 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     2.35 | AceX, Haski4, lame, Sange, ZinGY   |
|            2 |     3513 | 2024-02-16 | Arcade      | L   | 0.190      | -            | -                | -                | -         |    -3.43 | AceX, Haski4, lame, Sange, ZinGY   |
|            1 |     3953 | 2024-01-24 | Wings Up    | L   | 0.032      | -            | -                | -                | -         |    -0.82 | AceX, Haski4, lame, Sange, ZinGY   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,328.12)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.946 | $1,300.00      | $1,230.10       |
| 2024-02-17 |      0.196 | $500.00        | $98.02          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
