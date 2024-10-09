### Roster Details<br />
Team Name: Illuminar<br />
Roster: Furlan, kadziu, phr, splawik, ultimate<br />
Global Rank: [153](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_09.md)<br />
Regional Rank: [103]( ../../standings_europe_2024_10_09.md)<br />
<br />
Final Rank Value:  701.5<br />
<br />
Final Rank Value (701.5) = Starting Rank Value (697.2) + Head To Head Adjustments (4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.282[<sup>1</sup>](#table2)
- Bounty Collected: 0.308[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.154<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 697.2
- 400 + ( ( 0.154 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 697.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     3310 | 2024-06-13 | GamerLegion       | W   | 0.414      | 0.435        | 0.264 (0.047)    | 0.621 (0.112)    | 0 (0.000) |    11.94 | Furlan, kadziu, phr, splawik, ultimate  |
|           18 |     3373 | 2024-06-11 | Sampi             | W   | 0.399      | 0.435        | 0.049 (0.008)    | 0.716 (0.124)    | 0 (0.000) |    10.54 | Furlan, kadziu, phr, splawik, ultimate  |
|           17 |     3691 | 2024-06-05 | Aurora Young Blud | L   | 0.359      | -            | -                | -                | -         |    -2.95 | ANeraX, b1elany, Furlan, phr, ultimate  |
|           16 |     3727 | 2024-06-04 | Passion UA        | L   | 0.353      | -            | -                | -                | -         |    -1.09 | ANeraX, b1elany, Furlan, phr, ultimate  |
|           15 |     3820 | 2024-06-01 | WOPA              | W   | 0.332      | 0.143        | 0.000 (0.000)    | 0.070 (0.003)    | 0 (0.000) |     4.38 | ANeraX, b1elany, phr, splawik, ultimate |
|           14 |     3886 | 2024-05-29 | INFINITE          | L   | 0.314      | -            | -                | -                | -         |    -7.09 | ANeraX, b1elany, Furlan, phr, ultimate  |
|           13 |     3897 | 2024-05-29 | Passion UA        | L   | 0.312      | -            | -                | -                | -         |    -1.02 | ANeraX, b1elany, Furlan, phr, ultimate  |
|           12 |     3993 | 2024-05-24 | Enterprise        | L   | 0.279      | -            | -                | -                | -         |    -4.31 | ANeraX, b1elany, Furlan, phr, ultimate  |
|           11 |     3995 | 2024-05-24 | MOUZ NXT          | L   | 0.278      | -            | -                | -                | -         |    -1.98 | ANeraX, b1elany, Furlan, phr, ultimate  |
|           10 |     4050 | 2024-05-22 | Zero Tenacity     | L   | 0.265      | -            | -                | -                | -         |    -0.98 | ANeraX, b1elany, Furlan, phr, ultimate  |
|            9 |     4087 | 2024-05-21 | NAVI Junior       | L   | 0.260      | -            | -                | -                | -         |    -1.87 | ANeraX, b1elany, Furlan, phr, ultimate  |
|            8 |     4123 | 2024-05-20 | Sampi             | L   | 0.253      | -            | -                | -                | -         |    -1.23 | ANeraX, b1elany, Furlan, phr, ultimate  |
|            7 |     4734 | 2024-04-27 | EYEBALLERS        | L   | 0.099      | -            | -                | -                | -         |    -1.37 | ANeraX, Furlan, keis, phr, ultimate     |
|            6 |     4757 | 2024-04-26 | Zero Tenacity     | L   | 0.092      | -            | -                | -                | -         |    -0.38 | ANeraX, Furlan, keis, phr, ultimate     |
|            5 |     4822 | 2024-04-23 | Nexus             | W   | 0.072      | 0.435        | 0.006 (0.000)    | 0.477 (0.015)    | 0 (0.000) |     1.43 | ANeraX, Furlan, keis, phr, ultimate     |
|            4 |     4847 | 2024-04-21 | BLEED             | L   | 0.061      | -            | -                | -                | -         |    -0.86 | ANeraX, Furlan, keis, phr, ultimate     |
|            3 |     4886 | 2024-04-20 | Viperio           | W   | 0.052      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.41 | ANeraX, Furlan, keis, phr, ultimate     |
|            2 |     4952 | 2024-04-18 | Portugal          | W   | 0.041      | 0.143        | 0.000 (0.000)    | 0.032 (0.000)    | 0 (0.000) |     0.47 | ANeraX, Furlan, keis, phr, ultimate     |
|            1 |     5006 | 2024-04-17 | Secret            | W   | 0.034      | 0.143        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.23 | ANeraX, Furlan, keis, phr, ultimate     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($867.79)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
