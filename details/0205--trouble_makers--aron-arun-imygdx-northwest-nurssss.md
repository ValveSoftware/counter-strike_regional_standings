### Roster Details<br />
Team Name: Trouble makers<br />
Roster: aRon, arun, imyGDx, Northwest, nursSSS<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [205](../standings_global.md)<br />
Regional Rank: [28]( ../standings_asia.md)<br />
Final Rank Value:  499.7<br />
<br />
Final Rank Value (499.7) = Starting Rank Value (488.1) + Head To Head Adjustments (11.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.173[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 488.1
- 400 + ( ( 0.043 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 488.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     3728 | 2024-01-21 | MAG          | W   | 0.209      | 0.143        | 0.000 (0.000)    | 0.074 (0.002)    | 0 (0.000) |     3.47 | aRon, arun, imyGDx, Northwest, nursSSS |
|            9 |     3732 | 2024-01-21 | Gods Reign   | W   | 0.208      | 0.143        | 0.003 (0.000)    | 0.045 (0.001)    | 0 (0.000) |     4.74 | aRon, arun, imyGDx, Northwest, nursSSS |
|            8 |     3739 | 2024-01-21 | Dewa United  | W   | 0.207      | 0.143        | 0.003 (0.000)    | 0.027 (0.001)    | 0 (0.000) |     3.77 | aRon, arun, imyGDx, Northwest, nursSSS |
|            7 |     3770 | 2024-01-20 | SR Nacague   | W   | 0.202      | 0.143        | 0.000 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     2.47 | aRon, arun, imyGDx, Northwest, nursSSS |
|            6 |     3784 | 2024-01-20 | Drippy Lab   | W   | 0.200      | 0.143        | 0.000 (0.000)    | 0.013 (0.000)    | 0 (0.000) |     2.43 | aRon, arun, imyGDx, Northwest, nursSSS |
|            5 |     3839 | 2024-01-19 | Dewa United  | L   | 0.193      | -            | -                | -                | -         |    -2.54 | aRon, arun, imyGDx, Northwest, nursSSS |
|            4 |     3932 | 2024-01-17 | 2ez          | L   | 0.182      | -            | -                | -                | -         |    -3.52 | aRon, arun, imyGDx, Northwest, nursSSS |
|            3 |     3935 | 2024-01-17 | Drippy Lab   | W   | 0.181      | 0.143        | 0.000 (0.000)    | 0.013 (0.000)    | 0 (0.000) |     2.19 | aRon, arun, imyGDx, Northwest, nursSSS |
|            2 |     3938 | 2024-01-17 | SR Nacague   | L   | 0.181      | -            | -                | -                | -         |    -3.53 | aRon, arun, imyGDx, Northwest, nursSSS |
|            1 |     3942 | 2024-01-17 | Mai Mee Tang | W   | 0.181      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.15 | aRon, arun, imyGDx, Northwest, nursSSS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
