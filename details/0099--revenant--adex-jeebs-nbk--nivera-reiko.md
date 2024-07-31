### Roster Details<br />
Team Name: Revenant<br />
Roster: adeX, Jeebs, NBK-, Nivera, reiko<br />
Global Rank: [99](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [72]( ../standings_europe.md)<br />
<br />
Final Rank Value:  858.7<br />
<br />
Final Rank Value (858.7) = Starting Rank Value (805.5) + Head To Head Adjustments (53.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.390[<sup>1</sup>](#table2)
- Bounty Collected: 0.318[<sup>2</sup>](#table1)
- Opponent Network: 0.078[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.196<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 805.5
- 400 + ( ( 0.196 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 805.5


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
|           19 |      188 | 2024-07-26 | DMS             | L   | 1.000      | -            | -                | -                | -         |   -13.88 | adeX, Jeebs, NBK-, Nivera, reiko |
|           18 |      217 | 2024-07-25 | 3DMAX           | L   | 1.000      | -            | -                | -                | -         |    -1.87 | adeX, Jeebs, NBK-, Nivera, reiko |
|           17 |      248 | 2024-07-24 | AMKAL           | L   | 1.000      | -            | -                | -                | -         |    -4.09 | adeX, lauNX, NBK-, Nivera, reiko |
|           16 |      259 | 2024-07-24 | Eternal Fire    | L   | 1.000      | -            | -                | -                | -         |    -0.43 | adeX, lauNX, NBK-, Nivera, reiko |
|           15 |      686 | 2024-07-12 | Verdant         | W   | 1.000      | 0.371        | 0.015 (0.006)    | 0.300 (0.111)    | 0 (0.000) |    14.56 | adeX, lauNX, NBK-, Nivera, reiko |
|           14 |      746 | 2024-07-09 | Johnny Speeds   | W   | 1.000      | 0.333        | 0.124 (0.041)    | 0.817 (0.272)    | 0 (0.000) |    28.44 | adeX, lauNX, NBK-, Nivera, reiko |
|           13 |      763 | 2024-07-08 | Enterprise      | L   | 1.000      | -            | -                | -                | -         |   -11.10 | adeX, lauNX, NBK-, Nivera, reiko |
|           12 |      765 | 2024-07-08 | lajtbitexe      | W   | 1.000      | 0.333        | 0.007 (0.002)    | 0.111 (0.037)    | 0 (0.000) |    10.80 | adeX, lauNX, NBK-, Nivera, reiko |
|           11 |      770 | 2024-07-07 | kONO            | W   | 1.000      | 0.333        | 0.029 (0.010)    | 0.537 (0.179)    | 0 (0.000) |    17.52 | adeX, lauNX, NBK-, Nivera, reiko |
|           10 |      773 | 2024-07-06 | 777             | W   | 1.000      | 0.333        | 0.016 (0.005)    | 0.183 (0.061)    | 0 (0.000) |    11.59 | adeX, lauNX, NBK-, Nivera, reiko |
|            9 |      778 | 2024-07-05 | lajtbitexe      | L   | 1.000      | -            | -                | -                | -         |   -19.83 | adeX, lauNX, NBK-, Nivera, reiko |
|            8 |      809 | 2024-06-27 | Johnny Speeds   | L   | 0.971      | -            | -                | -                | -         |    -2.59 | adeX, lauNX, NBK-, Nivera, reiko |
|            7 |      812 | 2024-06-26 | lajtbitexe      | W   | 0.964      | 0.333        | 0.007 (0.002)    | 0.111 (0.036)    | 0 (0.000) |    10.81 | adeX, lauNX, NBK-, Nivera, reiko |
|            6 |      813 | 2024-06-25 | Johnny Speeds   | L   | 0.958      | -            | -                | -                | -         |    -2.48 | adeX, lauNX, NBK-, Nivera, reiko |
|            5 |      821 | 2024-06-23 | Heimo           | W   | 0.944      | 0.333        | 0.006 (0.002)    | 0.086 (0.027)    | 0 (0.000) |     9.19 | adeX, lauNX, NBK-, Nivera, reiko |
|            4 |      844 | 2024-06-16 | CYBERSHOKE      | L   | 0.900      | -            | -                | -                | -         |   -11.37 | adeX, lauNX, NBK-, Nivera, reiko |
|            3 |      873 | 2024-06-15 | Verdant         | W   | 0.893      | 0.143        | 0.015 (0.002)    | 0.300 (0.038)    | 0 (0.000) |    16.69 | adeX, lauNX, NBK-, Nivera, reiko |
|            2 |      930 | 2024-06-14 | Astralis Talent | W   | 0.885      | 0.143        | 0.009 (0.001)    | 0.162 (0.020)    | 0 (0.000) |    11.18 | adeX, lauNX, NBK-, Nivera, reiko |
|            1 |      958 | 2024-06-13 | Verdant         | L   | 0.879      | -            | -                | -                | -         |    -9.95 | adeX, lauNX, NBK-, Nivera, reiko |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,911.87)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-09 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-06-27 |      0.971 | $3,000.00      | $2,911.87       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
