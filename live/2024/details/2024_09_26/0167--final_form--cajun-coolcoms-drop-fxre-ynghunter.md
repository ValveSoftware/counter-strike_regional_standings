### Roster Details<br />
Team Name: Final Form<br />
Roster: CAJUN, CoolComs, Drop, FxRE, YNGHunter<br />
Global Rank: [167](../../standings_global_2024_09_26.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_09_26.md)<br />
Regional Rank: [48]( ../../standings_americas_2024_09_26.md)<br />
<br />
Final Rank Value:  647.7<br />
<br />
Final Rank Value (647.7) = Starting Rank Value (657.5) + Head To Head Adjustments (-9.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.292[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 657.5
- 400 + ( ( 0.136 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 657.5


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
|           14 |      159 | 2024-09-22 | E-Xolos LAZER | L   | 1.000      | -            | -                | -                | -         |    -9.97 | CAJUN, CoolComs, Drop, FxRE, YNGHunter |
|           13 |      208 | 2024-09-20 | Phoenix       | W   | 1.000      | 0.371        | 0.002 (0.001)    | 0.202 (0.075)    | 0 (0.000) |    15.20 | CAJUN, CoolComs, Drop, FxRE, YNGHunter |
|           12 |      353 | 2024-09-15 | undefined     | L   | 1.000      | -            | -                | -                | -         |   -10.52 | CAJUN, CoolComs, Drop, FxRE, Zzeus     |
|           11 |      386 | 2024-09-14 | Lore          | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.114 (0.042)    | 0 (0.000) |     9.50 | CAJUN, CoolComs, Drop, FxRE, YNGHunter |
|           10 |      516 | 2024-09-10 | Mythic        | L   | 1.000      | -            | -                | -                | -         |   -13.88 | CAJUN, CoolComs, Drop, FxRE, Zzeus     |
|            9 |      544 | 2024-09-09 | InControl     | L   | 1.000      | -            | -                | -                | -         |   -15.30 | CAJUN, CoolComs, Drop, FxRE, Zzeus     |
|            8 |     1598 | 2024-08-08 | FLUFFY AIMERS | L   | 0.875      | -            | -                | -                | -         |   -11.38 | CAJUN, CoolComs, Drop, Fruitcupx, FxRE |
|            7 |     1742 | 2024-08-04 | Take Flyte    | W   | 0.850      | 0.371        | 0.004 (0.001)    | 0.267 (0.084)    | 0 (0.000) |    14.94 | CAJUN, CoolComs, Drop, Fruitcupx, FxRE |
|            6 |     2043 | 2024-07-27 | jahsdnmasjdm  | W   | 0.796      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.57 | CAJUN, CoolComs, Drop, Fruitcupx, FxRE |
|            5 |     2822 | 2024-06-14 | BOSS          | L   | 0.507      | -            | -                | -                | -         |    -6.13 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |
|            4 |     2924 | 2024-06-10 | Limitless     | W   | 0.481      | 0.371        | 0.001 (0.000)    | 0.064 (0.011)    | 0 (0.000) |     5.98 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |
|            3 |     3016 | 2024-06-08 | Akimbo        | L   | 0.470      | -            | -                | -                | -         |    -4.74 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |
|            2 |     3134 | 2024-06-06 | E-Xolos LAZER | W   | 0.456      | 0.371        | 0.006 (0.001)    | 0.522 (0.088)    | 0 (0.000) |     9.25 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |
|            1 |     3272 | 2024-06-04 | Lore          | W   | 0.440      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.64 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,250.00)
- Divide that value by the 5th highest value among all rosters ($332,851.90)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
