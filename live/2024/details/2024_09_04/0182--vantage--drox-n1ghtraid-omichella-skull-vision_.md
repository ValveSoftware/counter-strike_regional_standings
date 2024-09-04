### Roster Details<br />
Team Name: Vantage<br />
Roster: Drox, N1ghtraid, Omichella, SkulL, vision <br />
Global Rank: [182](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_09_04.md)<br />
Regional Rank: [21]( ../../standings_asia_2024_09_04.md)<br />
<br />
Final Rank Value:  624.3<br />
<br />
Final Rank Value (624.3) = Starting Rank Value (629.1) + Head To Head Adjustments (-4.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.263[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.116<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 629.1
- 400 + ( ( 0.116 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 629.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     2901 | 2024-05-22 | Rooster     | L   | 0.498      | -            | -                | -                | -         |    -5.00 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           12 |     2905 | 2024-05-22 | Rooster     | L   | 0.498      | -            | -                | -                | -         |    -5.20 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           11 |     3684 | 2024-04-22 | Mindfreak   | L   | 0.299      | -            | -                | -                | -         |    -4.07 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|           10 |     3687 | 2024-04-22 | Mindfreak   | L   | 0.298      | -            | -                | -                | -         |    -4.17 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|            9 |     3875 | 2024-04-17 | Arcade      | L   | 0.265      | -            | -                | -                | -         |    -3.40 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|            8 |     4037 | 2024-04-10 | Arcade      | W   | 0.218      | 0.333        | 0.002 (0.000)    | 0.249 (0.018)    | 0 (0.000) |     4.13 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|            7 |     4044 | 2024-04-10 | Arcade      | W   | 0.218      | 0.333        | 0.002 (0.000)    | 0.249 (0.018)    | 0 (0.000) |     4.20 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|            6 |     4268 | 2024-04-03 | KZG         | W   | 0.172      | 0.333        | 0.003 (0.000)    | 0.158 (0.009)    | 0 (0.000) |     2.94 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|            5 |     4269 | 2024-04-03 | KZG         | W   | 0.172      | 0.333        | 0.003 (0.000)    | 0.158 (0.009)    | 0 (0.000) |     2.98 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|            4 |     4396 | 2024-03-27 | Canon Event | W   | 0.125      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.31 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|            3 |     4400 | 2024-03-27 | Canon Event | W   | 0.125      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.32 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|            2 |     4666 | 2024-03-13 | DXA         | L   | 0.032      | -            | -                | -                | -         |    -0.46 | Drox, N1ghtraid, Omichella, SkulL, vision  |
|            1 |     4671 | 2024-03-13 | DXA         | W   | 0.032      | 0.333        | 0.001 (0.000)    | 0.231 (0.002)    | 0 (0.000) |     0.54 | Drox, N1ghtraid, Omichella, SkulL, vision  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($494.35)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
