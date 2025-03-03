### Roster Details<br />
Team Name: Clutch<br />
Roster: hasteka, IZR, ORIGLONIKO, Tsogoo, Veccil<br />
Global Rank: [254](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_03.md)<br />
Regional Rank: [35]( ../../standings_asia_2025_03_03.md)<br />
<br />
Final Rank Value:  529.1<br />
<br />
Final Rank Value (529.1) = Starting Rank Value (530.9) + Head To Head Adjustments (-1.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.056[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 530.9
- 400 + ( ( 0.068 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 530.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1729 | 2024-11-07 | IHC               | L   | 0.424      | -            | -                | -                | -         |    -4.61 | hasteka, IZR, ORIGLONIKO, Tsogoo, Veccil  |
|            7 |     1744 | 2024-11-06 | Gods Reign        | W   | 0.418      | 0.333        | 0.014 (0.002)    | 0.318 (0.044)    | 0 (0.000) |    11.53 | hasteka, IZR, ORIGLONIKO, Tsogoo, Veccil  |
|            6 |     1746 | 2024-11-05 | Dewa United       | L   | 0.417      | -            | -                | -                | -         |    -8.81 | hasteka, IZR, ORIGLONIKO, Tsogoo, Veccil  |
|            5 |     2147 | 2024-10-17 | ATOX              | L   | 0.285      | -            | -                | -                | -         |    -2.58 | clouden, hasteka, IZR, ORIGLONIKO, Tsogoo |
|            4 |     2177 | 2024-10-16 | The QUBE          | W   | 0.278      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.278) |     2.81 | clouden, hasteka, IZR, ORIGLONIKO, Tsogoo |
|            3 |     2196 | 2024-10-15 | Chinggis Warriors | L   | 0.271      | -            | -                | -                | -         |    -1.76 | clouden, hasteka, IZR, ORIGLONIKO, Tsogoo |
|            2 |     2471 | 2024-10-04 | ATOX              | L   | 0.199      | -            | -                | -                | -         |    -0.41 | clouden, hasteka, IZR, ORIGLONIKO, Tsogoo |
|            1 |     2478 | 2024-10-03 | The QUBE          | W   | 0.197      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.197) |     2.01 | clouden, hasteka, IZR, ORIGLONIKO, Tsogoo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
