### Roster Details<br />
Team Name: Final Form<br />
Roster: CAJUN, CoolComs, Drop, FxRE, YNGHunter<br />
Global Rank: [188](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_11_13.md)<br />
Regional Rank: [55]( ../../standings_americas_2024_11_13.md)<br />
<br />
Final Rank Value:  630.3<br />
<br />
Final Rank Value (630.3) = Starting Rank Value (646.7) + Head To Head Adjustments (-16.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.280[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.124<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 646.7
- 400 + ( ( 0.124 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 646.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      644 | 2024-10-12 | FLUFFY AIMERS | L   | 0.988      | -            | -                | -                | -         |    -6.81 | CAJUN, CoolComs, Drop, FxRE, YNGHunter |
|           14 |     1327 | 2024-09-22 | E-Xolos LAZER | L   | 0.856      | -            | -                | -                | -         |    -8.02 | CAJUN, CoolComs, Drop, FxRE, YNGHunter |
|           13 |     1376 | 2024-09-20 | Penance       | W   | 0.842      | 0.371        | 0.001 (0.000)    | 0.085 (0.027)    | 0 (0.000) |    12.22 | CAJUN, CoolComs, Drop, FxRE, YNGHunter |
|           12 |     1521 | 2024-09-15 | undefined     | L   | 0.809      | -            | -                | -                | -         |    -9.44 | CAJUN, CoolComs, Drop, FxRE, Zzeus     |
|           11 |     1554 | 2024-09-14 | Lore          | W   | 0.802      | 0.371        | 0.000 (0.000)    | 0.089 (0.027)    | 0 (0.000) |     8.00 | CAJUN, CoolComs, Drop, FxRE, YNGHunter |
|           10 |     1684 | 2024-09-10 | Mythic        | L   | 0.776      | -            | -                | -                | -         |   -10.40 | CAJUN, CoolComs, Drop, FxRE, Zzeus     |
|            9 |     1712 | 2024-09-09 | InControl     | L   | 0.769      | -            | -                | -                | -         |   -11.34 | CAJUN, CoolComs, Drop, FxRE, Zzeus     |
|            8 |     2766 | 2024-08-08 | FLUFFY AIMERS | L   | 0.555      | -            | -                | -                | -         |    -5.76 | CAJUN, CoolComs, Drop, Fruitcupx, FxRE |
|            7 |     2910 | 2024-08-04 | Take Flyte    | W   | 0.529      | 0.371        | 0.003 (0.001)    | 0.215 (0.042)    | 0 (0.000) |    10.82 | CAJUN, CoolComs, Drop, Fruitcupx, FxRE |
|            6 |     3211 | 2024-07-27 | jahsdnmasjdm  | W   | 0.476      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.97 | CAJUN, CoolComs, Drop, Fruitcupx, FxRE |
|            5 |     3990 | 2024-06-14 | BOSS          | L   | 0.187      | -            | -                | -                | -         |    -1.10 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |
|            4 |     4092 | 2024-06-10 | Limitless     | W   | 0.161      | 0.371        | 0.000 (0.000)    | 0.015 (0.001)    | 0 (0.000) |     1.57 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |
|            3 |     4184 | 2024-06-08 | OMiT          | L   | 0.149      | -            | -                | -                | -         |    -2.69 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |
|            2 |     4302 | 2024-06-06 | E-Xolos LAZER | W   | 0.135      | 0.371        | 0.008 (0.000)    | 0.349 (0.018)    | 0 (0.000) |     2.83 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |
|            1 |     4440 | 2024-06-04 | Lore          | W   | 0.120      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.76 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,211.53)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      0.995 | $150.00        | $149.27         |
| 2024-09-21 |      0.850 | $1,250.00      | $1,062.26       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
