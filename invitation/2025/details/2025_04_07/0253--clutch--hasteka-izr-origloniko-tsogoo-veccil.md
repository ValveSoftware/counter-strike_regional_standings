### Roster Details<br />
Team Name: Clutch<br />
Roster: hasteka, IZR, ORIGLONIKO, Tsogoo, Veccil<br />
Global Rank: [253](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [34]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  494.8<br />
<br />
Final Rank Value (494.8) = Starting Rank Value (495.4) + Head To Head Adjustments (-0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.005[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 495.4
- 400 + ( ( 0.052 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 495.4


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
|            6 |     2664 | 2024-11-07 | IHC               | L   | 0.191      | -            | -                | -                | -         |    -1.95 | hasteka, IZR, ORIGLONIKO, Tsogoo, Veccil  |
|            5 |     2679 | 2024-11-06 | Gods Reign        | W   | 0.185      | 0.333        | 0.017 (0.001)    | 0.280 (0.017)    | 0 (0.000) |     5.08 | hasteka, IZR, ORIGLONIKO, Tsogoo, Veccil  |
|            4 |     2681 | 2024-11-05 | Dewa United       | L   | 0.184      | -            | -                | -                | -         |    -3.65 | hasteka, IZR, ORIGLONIKO, Tsogoo, Veccil  |
|            3 |     3082 | 2024-10-17 | ATOX              | L   | 0.052      | -            | -                | -                | -         |    -0.53 | clouden, hasteka, IZR, ORIGLONIKO, Tsogoo |
|            2 |     3112 | 2024-10-16 | The QUBE          | W   | 0.045      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.045) |     0.52 | clouden, hasteka, IZR, ORIGLONIKO, Tsogoo |
|            1 |     3131 | 2024-10-15 | Chinggis Warriors | L   | 0.038      | -            | -                | -                | -         |    -0.09 | clouden, hasteka, IZR, ORIGLONIKO, Tsogoo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
