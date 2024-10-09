### Roster Details<br />
Team Name: Final Form<br />
Roster: CAJUN, CoolComs, Drop, FxRE, YNGHunter<br />
Global Rank: [170](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_09.md)<br />
Regional Rank: [49]( ../../standings_americas_2024_10_09.md)<br />
<br />
Final Rank Value:  651.5<br />
<br />
Final Rank Value (651.5) = Starting Rank Value (660.2) + Head To Head Adjustments (-8.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 660.2
- 400 + ( ( 0.135 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 660.2


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
|           14 |      612 | 2024-09-22 | E-Xolos LAZER | L   | 1.000      | -            | -                | -                | -         |    -9.32 | CAJUN, CoolComs, Drop, FxRE, YNGHunter |
|           13 |      661 | 2024-09-20 | Phoenix       | W   | 1.000      | 0.371        | 0.002 (0.001)    | 0.148 (0.055)    | 0 (0.000) |    15.49 | CAJUN, CoolComs, Drop, FxRE, YNGHunter |
|           12 |      806 | 2024-09-15 | undefined     | L   | 1.000      | -            | -                | -                | -         |   -10.88 | CAJUN, CoolComs, Drop, FxRE, Zzeus     |
|           11 |      839 | 2024-09-14 | Lore          | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.100 (0.037)    | 0 (0.000) |     9.46 | CAJUN, CoolComs, Drop, FxRE, YNGHunter |
|           10 |      969 | 2024-09-10 | Mythic        | L   | 1.000      | -            | -                | -                | -         |   -12.97 | CAJUN, CoolComs, Drop, FxRE, Zzeus     |
|            9 |      997 | 2024-09-09 | InControl     | L   | 1.000      | -            | -                | -                | -         |   -14.82 | CAJUN, CoolComs, Drop, FxRE, Zzeus     |
|            8 |     2051 | 2024-08-08 | FLUFFY AIMERS | L   | 0.789      | -            | -                | -                | -         |    -8.56 | CAJUN, CoolComs, Drop, Fruitcupx, FxRE |
|            7 |     2195 | 2024-08-04 | Take Flyte    | W   | 0.763      | 0.371        | 0.004 (0.001)    | 0.272 (0.077)    | 0 (0.000) |    14.76 | CAJUN, CoolComs, Drop, Fruitcupx, FxRE |
|            6 |     2496 | 2024-07-27 | jahsdnmasjdm  | W   | 0.710      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.09 | CAJUN, CoolComs, Drop, Fruitcupx, FxRE |
|            5 |     3275 | 2024-06-14 | BOSS          | L   | 0.421      | -            | -                | -                | -         |    -3.92 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |
|            4 |     3377 | 2024-06-10 | Limitless     | W   | 0.395      | 0.371        | 0.001 (0.000)    | 0.043 (0.006)    | 0 (0.000) |     5.20 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |
|            3 |     3469 | 2024-06-08 | OMiT          | L   | 0.383      | -            | -                | -                | -         |    -6.91 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |
|            2 |     3587 | 2024-06-06 | E-Xolos LAZER | W   | 0.369      | 0.371        | 0.005 (0.001)    | 0.455 (0.062)    | 0 (0.000) |     7.58 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |
|            1 |     3725 | 2024-06-04 | Lore          | W   | 0.354      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.10 | CoolComs, Drop, Fruitcupx, FxRE, JoSoo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,250.00)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
