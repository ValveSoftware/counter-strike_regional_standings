### Roster Details<br />
Team Name: Revenant<br />
Roster: adeX, lauNX, NBK-, Nivera, reiko<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [97](../standings_global.md)<br />
Regional Rank: [70]( ../standings_europe.md)<br />
Final Rank Value:  879.5<br />
<br />
Final Rank Value (879.5) = Starting Rank Value (812.4) + Head To Head Adjustments (67.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.402[<sup>1</sup>](#table2)
- Bounty Collected: 0.328[<sup>2</sup>](#table1)
- Opponent Network: 0.085[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.204<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 812.4
- 400 + ( ( 0.204 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 812.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |        6 | 2024-07-24 | AMKAL           | L   | 1.000      | -            | -                | -                | -         |    -4.73 | adeX, lauNX, NBK-, Nivera, reiko |
|           16 |       17 | 2024-07-24 | Eternal Fire    | L   | 1.000      | -            | -                | -                | -         |    -0.56 | adeX, lauNX, NBK-, Nivera, reiko |
|           15 |      444 | 2024-07-12 | Verdant         | W   | 1.000      | 0.371        | 0.019 (0.007)    | 0.336 (0.124)    | 0 (0.000) |    14.32 | adeX, lauNX, NBK-, Nivera, reiko |
|           14 |      504 | 2024-07-09 | Johnny Speeds   | W   | 1.000      | 0.333        | 0.154 (0.051)    | 0.858 (0.286)    | 0 (0.000) |    28.62 | adeX, lauNX, NBK-, Nivera, reiko |
|           13 |      521 | 2024-07-08 | Enterprise      | L   | 1.000      | -            | -                | -                | -         |   -11.04 | adeX, lauNX, NBK-, Nivera, reiko |
|           12 |      523 | 2024-07-08 | lajtbitexe      | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.122 (0.041)    | 0 (0.000) |    10.69 | adeX, lauNX, NBK-, Nivera, reiko |
|           11 |      528 | 2024-07-07 | kONO            | W   | 1.000      | 0.333        | 0.036 (0.012)    | 0.559 (0.186)    | 0 (0.000) |    17.87 | adeX, lauNX, NBK-, Nivera, reiko |
|           10 |      531 | 2024-07-06 | 777             | W   | 1.000      | 0.333        | 0.020 (0.007)    | 0.208 (0.069)    | 0 (0.000) |    11.57 | adeX, lauNX, NBK-, Nivera, reiko |
|            9 |      536 | 2024-07-05 | lajtbitexe      | L   | 1.000      | -            | -                | -                | -         |   -19.95 | adeX, lauNX, NBK-, Nivera, reiko |
|            8 |      567 | 2024-06-27 | Johnny Speeds   | L   | 1.000      | -            | -                | -                | -         |    -2.50 | adeX, lauNX, NBK-, Nivera, reiko |
|            7 |      570 | 2024-06-26 | lajtbitexe      | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.122 (0.041)    | 0 (0.000) |    11.10 | adeX, lauNX, NBK-, Nivera, reiko |
|            6 |      571 | 2024-06-25 | Johnny Speeds   | L   | 1.000      | -            | -                | -                | -         |    -2.42 | adeX, lauNX, NBK-, Nivera, reiko |
|            5 |      579 | 2024-06-23 | Heimo           | W   | 0.991      | 0.333        | 0.008 (0.003)    | 0.095 (0.031)    | 0 (0.000) |     9.54 | adeX, lauNX, NBK-, Nivera, reiko |
|            4 |      602 | 2024-06-16 | CYBERSHOKE      | L   | 0.947      | -            | -                | -                | -         |   -13.80 | adeX, lauNX, NBK-, Nivera, reiko |
|            3 |      631 | 2024-06-15 | Verdant         | W   | 0.940      | 0.143        | 0.019 (0.003)    | 0.336 (0.045)    | 0 (0.000) |    17.26 | adeX, lauNX, NBK-, Nivera, reiko |
|            2 |      688 | 2024-06-14 | Astralis Talent | W   | 0.932      | 0.143        | 0.012 (0.002)    | 0.180 (0.024)    | 0 (0.000) |    11.78 | adeX, lauNX, NBK-, Nivera, reiko |
|            1 |      716 | 2024-06-13 | Verdant         | L   | 0.926      | -            | -                | -                | -         |   -10.66 | adeX, lauNX, NBK-, Nivera, reiko |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,000.00)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-09 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-06-27 |      1.000 | $3,000.00      | $3,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
