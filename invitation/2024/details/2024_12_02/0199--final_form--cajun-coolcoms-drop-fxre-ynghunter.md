### Roster Details<br />
Team Name: Final Form<br />
Roster: CAJUN, CoolComs, Drop, FxRE, YNGHunter<br />
Global Rank: [199](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_02.md)<br />
Regional Rank: [60]( ../../standings_americas_2024_12_02.md)<br />
<br />
Final Rank Value:  618.2<br />
<br />
Final Rank Value (618.2) = Starting Rank Value (638.3) + Head To Head Adjustments (-20.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.281[<sup>1</sup>](#table2)
- Bounty Collected: 0.186[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.119<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 638.3
- 400 + ( ( 0.119 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 638.3


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
|           14 |     1046 | 2024-10-12 | FLUFFY AIMERS | L   | 0.862      | -            | -                | -                | -         |    -6.50 | CAJUN, CoolComs, Drop, FxRE, YNGHunter |
|           13 |     1729 | 2024-09-22 | E-Xolos LAZER | L   | 0.730      | -            | -                | -                | -         |    -7.35 | CAJUN, CoolComs, Drop, FxRE, YNGHunter |
|           12 |     1778 | 2024-09-20 | USA           | W   | 0.716      | 0.371        | 0.000 (0.000)    | 0.070 (0.019)    | 0 (0.000) |     7.58 | CAJUN, CoolComs, Drop, FxRE, YNGHunter |
|           11 |     1923 | 2024-09-15 | undefined     | L   | 0.683      | -            | -                | -                | -         |    -7.95 | CAJUN, CoolComs, Drop, FxRE, Zzeus     |
|           10 |     1956 | 2024-09-14 | Lore          | W   | 0.676      | 0.371        | 0.000 (0.000)    | 0.083 (0.021)    | 0 (0.000) |     7.00 | CAJUN, CoolComs, Drop, FxRE, YNGHunter |
|            9 |     2086 | 2024-09-10 | Mythic        | L   | 0.650      | -            | -                | -                | -         |    -9.22 | CAJUN, CoolComs, Drop, FxRE, Zzeus     |
|            8 |     2114 | 2024-09-09 | InControl     | L   | 0.643      | -            | -                | -                | -         |    -9.32 | CAJUN, CoolComs, Drop, FxRE, Zzeus     |
|            7 |     3168 | 2024-08-08 | FLUFFY AIMERS | L   | 0.429      | -            | -                | -                | -         |    -4.49 | CAJUN, CoolComs, Drop, Fruitcupx, FxRE |
|            6 |     3312 | 2024-08-04 | Take Flyte    | W   | 0.403      | 0.371        | 0.003 (0.000)    | 0.185 (0.028)    | 0 (0.000) |     8.07 | CAJUN, CoolComs, Drop, Fruitcupx, FxRE |
|            5 |     3613 | 2024-07-27 | jahsdnmasjdm  | W   | 0.350      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.29 | CAJUN, CoolComs, Drop, Fruitcupx, FxRE |
|            4 |     4392 | 2024-06-14 | BOSS          | L   | 0.061      | -            | -                | -                | -         |    -0.36 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |
|            3 |     4494 | 2024-06-10 | Limitless     | W   | 0.035      | 0.371        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.23 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |
|            2 |     4586 | 2024-06-08 | Akimbo        | L   | 0.023      | -            | -                | -                | -         |    -0.27 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |
|            1 |     4704 | 2024-06-06 | E-Xolos LAZER | W   | 0.009      | 0.371        | 0.008 (0.000)    | 0.289 (0.001)    | 0 (0.000) |     0.19 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,035.07)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      0.869 | $150.00        | $130.37         |
| 2024-09-21 |      0.724 | $1,250.00      | $904.70         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
