### Roster Details<br />
Team Name: Trouble makers<br />
Roster: aRon, arun, imyGDx, Northwest, nursSSS<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [200](../standings_global.md)<br />
Regional Rank: [28]( ../standings_asia.md)<br />
Final Rank Value:  485.1<br />
<br />
Final Rank Value (485.1) = Starting Rank Value (481.9) + Head To Head Adjustments (3.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.155[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.039<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 481.9
- 400 + ( ( 0.039 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 481.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     3861 | 2024-01-21 | MAG          | W   | 0.053      | 0.143        | 0.000 (0.000)    | 0.034 (0.000)    | 0 (0.000) |     0.88 | aRon, arun, imyGDx, Northwest, nursSSS |
|            9 |     3865 | 2024-01-21 | Gods Reign   | W   | 0.052      | 0.143        | 0.002 (0.000)    | 0.013 (0.000)    | 0 (0.000) |     1.18 | aRon, arun, imyGDx, Northwest, nursSSS |
|            8 |     3872 | 2024-01-21 | Dewa United  | W   | 0.051      | 0.143        | 0.003 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.96 | aRon, arun, imyGDx, Northwest, nursSSS |
|            7 |     3903 | 2024-01-20 | SR Nacague   | W   | 0.046      | 0.143        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.56 | aRon, arun, imyGDx, Northwest, nursSSS |
|            6 |     3917 | 2024-01-20 | Drippy Lab   | W   | 0.044      | 0.143        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.54 | aRon, arun, imyGDx, Northwest, nursSSS |
|            5 |     3972 | 2024-01-19 | Dewa United  | L   | 0.038      | -            | -                | -                | -         |    -0.48 | aRon, arun, imyGDx, Northwest, nursSSS |
|            4 |     4065 | 2024-01-17 | 2ez          | L   | 0.026      | -            | -                | -                | -         |    -0.50 | aRon, arun, imyGDx, Northwest, nursSSS |
|            3 |     4068 | 2024-01-17 | Drippy Lab   | W   | 0.026      | 0.143        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.31 | aRon, arun, imyGDx, Northwest, nursSSS |
|            2 |     4071 | 2024-01-17 | SR Nacague   | L   | 0.025      | -            | -                | -                | -         |    -0.49 | aRon, arun, imyGDx, Northwest, nursSSS |
|            1 |     4075 | 2024-01-17 | Mai Mee Tang | W   | 0.025      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.30 | aRon, arun, imyGDx, Northwest, nursSSS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
