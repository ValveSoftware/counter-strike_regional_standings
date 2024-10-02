### Roster Details<br />
Team Name: Final Form<br />
Roster: CAJUN, CoolComs, Drop, FxRE, YNGHunter<br />
Global Rank: [174](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_02.md)<br />
Regional Rank: [51]( ../../standings_americas_2024_10_02.md)<br />
<br />
Final Rank Value:  644.2<br />
<br />
Final Rank Value (644.2) = Starting Rank Value (657.8) + Head To Head Adjustments (-13.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.292[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 657.8
- 400 + ( ( 0.135 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 657.8


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
|           14 |      392 | 2024-09-22 | E-Xolos LAZER | L   | 1.000      | -            | -                | -                | -         |    -9.93 | CAJUN, CoolComs, Drop, FxRE, YNGHunter |
|           13 |      441 | 2024-09-20 | Phoenix       | W   | 1.000      | 0.371        | 0.002 (0.001)    | 0.167 (0.062)    | 0 (0.000) |    15.19 | CAJUN, CoolComs, Drop, FxRE, YNGHunter |
|           12 |      586 | 2024-09-15 | undefined     | L   | 1.000      | -            | -                | -                | -         |   -10.91 | CAJUN, CoolComs, Drop, FxRE, Zzeus     |
|           11 |      619 | 2024-09-14 | Lore          | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.103 (0.038)    | 0 (0.000) |     9.63 | CAJUN, CoolComs, Drop, FxRE, YNGHunter |
|           10 |      749 | 2024-09-10 | Mythic        | L   | 1.000      | -            | -                | -                | -         |   -13.70 | CAJUN, CoolComs, Drop, FxRE, Zzeus     |
|            9 |      777 | 2024-09-09 | InControl     | L   | 1.000      | -            | -                | -                | -         |   -15.05 | CAJUN, CoolComs, Drop, FxRE, Zzeus     |
|            8 |     1831 | 2024-08-08 | FLUFFY AIMERS | L   | 0.834      | -            | -                | -                | -         |   -10.82 | CAJUN, CoolComs, Drop, Fruitcupx, FxRE |
|            7 |     1975 | 2024-08-04 | Take Flyte    | W   | 0.809      | 0.371        | 0.004 (0.001)    | 0.261 (0.078)    | 0 (0.000) |    14.62 | CAJUN, CoolComs, Drop, Fruitcupx, FxRE |
|            6 |     2276 | 2024-07-27 | jahsdnmasjdm  | W   | 0.755      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.42 | CAJUN, CoolComs, Drop, Fruitcupx, FxRE |
|            5 |     3055 | 2024-06-14 | BOSS          | L   | 0.466      | -            | -                | -                | -         |    -5.64 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |
|            4 |     3157 | 2024-06-10 | Limitless     | W   | 0.440      | 0.371        | 0.001 (0.000)    | 0.051 (0.008)    | 0 (0.000) |     5.54 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |
|            3 |     3249 | 2024-06-08 | OMiT          | L   | 0.429      | -            | -                | -                | -         |    -7.72 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |
|            2 |     3367 | 2024-06-06 | E-Xolos LAZER | W   | 0.415      | 0.371        | 0.006 (0.001)    | 0.452 (0.069)    | 0 (0.000) |     8.33 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |
|            1 |     3505 | 2024-06-04 | Lore          | W   | 0.399      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.39 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,250.00)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
