### Roster Details<br />
Team Name: Revenant<br />
Roster: adeX, lauNX, NBK-, Nivera, reiko<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [100](../standings_global.md)<br />
Regional Rank: [72]( ../standings_europe.md)<br />
Final Rank Value:  880.1<br />
<br />
Final Rank Value (880.1) = Starting Rank Value (823.5) + Head To Head Adjustments (56.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.407[<sup>1</sup>](#table2)
- Bounty Collected: 0.327[<sup>2</sup>](#table1)
- Opponent Network: 0.070[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.201<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 823.5
- 400 + ( ( 0.201 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 823.5


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
|           14 |       52 | 2024-07-09 | Johnny Speeds   | W   | 1.000      | 0.333        | 0.158 (0.053)    | 0.825 (0.275)    | 0 (0.000) |    29.07 | adeX, lauNX, NBK-, Nivera, reiko |
|           13 |       69 | 2024-07-08 | Enterprise      | L   | 1.000      | -            | -                | -                | -         |    -9.76 | adeX, lauNX, NBK-, Nivera, reiko |
|           12 |       71 | 2024-07-08 | lajtbitexe      | W   | 1.000      | 0.333        | 0.010 (0.003)    | 0.122 (0.041)    | 0 (0.000) |    10.95 | adeX, lauNX, NBK-, Nivera, reiko |
|           11 |       76 | 2024-07-07 | kONO            | W   | 1.000      | 0.333        | 0.041 (0.014)    | 0.569 (0.190)    | 0 (0.000) |    19.37 | adeX, lauNX, NBK-, Nivera, reiko |
|           10 |       79 | 2024-07-06 | 777             | W   | 1.000      | 0.333        | 0.024 (0.008)    | 0.231 (0.077)    | 0 (0.000) |    12.10 | adeX, lauNX, NBK-, Nivera, reiko |
|            9 |       84 | 2024-07-05 | lajtbitexe      | L   | 1.000      | -            | -                | -                | -         |   -19.57 | adeX, lauNX, NBK-, Nivera, reiko |
|            8 |      115 | 2024-06-27 | Johnny Speeds   | L   | 1.000      | -            | -                | -                | -         |    -2.05 | adeX, lauNX, NBK-, Nivera, reiko |
|            7 |      118 | 2024-06-26 | lajtbitexe      | W   | 1.000      | 0.333        | 0.010 (0.003)    | 0.122 (0.041)    | 0 (0.000) |    11.52 | adeX, lauNX, NBK-, Nivera, reiko |
|            6 |      119 | 2024-06-25 | Johnny Speeds   | L   | 1.000      | -            | -                | -                | -         |    -1.98 | adeX, lauNX, NBK-, Nivera, reiko |
|            5 |      127 | 2024-06-23 | Heimo           | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.061 (0.020)    | 0 (0.000) |    10.07 | adeX, lauNX, NBK-, Nivera, reiko |
|            4 |      150 | 2024-06-16 | CYBERSHOKE      | L   | 1.000      | -            | -                | -                | -         |   -13.42 | adeX, lauNX, NBK-, Nivera, reiko |
|            3 |      179 | 2024-06-15 | Verdant         | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.327 (0.047)    | 0 (0.000) |    16.60 | adeX, lauNX, NBK-, Nivera, reiko |
|            2 |      236 | 2024-06-14 | Astralis Talent | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.040 (0.006)    | 0 (0.000) |     7.28 | adeX, lauNX, NBK-, Nivera, reiko |
|            1 |      264 | 2024-06-13 | Verdant         | L   | 1.000      | -            | -                | -                | -         |   -13.52 | adeX, lauNX, NBK-, Nivera, reiko |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,000.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-09 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-06-27 |      1.000 | $3,000.00      | $3,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
