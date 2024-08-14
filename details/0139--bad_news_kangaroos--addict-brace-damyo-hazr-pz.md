### Roster Details<br />
Team Name: Bad News Kangaroos<br />
Roster: ADDICT, BRACE, damyo, hazr, pz<br />
Global Rank: [139](../standings_global.md)<br />
<br />
Region: [Asia]( ../standings_asia.md)<br />
Regional Rank: [11]( ../standings_asia.md)<br />
<br />
Final Rank Value:  746.5<br />
<br />
Final Rank Value (746.5) = Starting Rank Value (725.5) + Head To Head Adjustments (21.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.351[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.074[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 725.5
- 400 + ( ( 0.165 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 725.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |     2712 | 2024-05-03 | FURIA       | L   | 0.512      | -            | -                | -                | -         |    -0.12 | ADDICT, BRACE, damyo, hazr, pz      |
|           26 |     2757 | 2024-05-01 | ENCE        | L   | 0.499      | -            | -                | -                | -         |    -0.54 | ADDICT, BRACE, damyo, hazr, pz      |
|           25 |     2790 | 2024-04-30 | MOUZ        | L   | 0.491      | -            | -                | -                | -         |    -0.04 | ADDICT, BRACE, damyo, hazr, pz      |
|           24 |     3012 | 2024-04-20 | FlyQuest    | L   | 0.424      | -            | -                | -                | -         |    -1.64 | ADDICT, BRACE, damyo, hazr, pz      |
|           23 |     3016 | 2024-04-20 | Rooster     | W   | 0.424      | 0.143        | 0.009 (0.001)    | 0.310 (0.019)    | 0 (0.000) |     7.22 | ADDICT, BRACE, damyo, hazr, pz      |
|           22 |     3061 | 2024-04-19 | Mindfreak   | W   | 0.418      | 0.143        | 0.003 (0.000)    | 0.216 (0.013)    | 0 (0.000) |     5.66 | ADDICT, BRACE, damyo, hazr, pz      |
|           21 |     3064 | 2024-04-19 | Rooster     | L   | 0.417      | -            | -                | -                | -         |    -6.01 | ADDICT, BRACE, damyo, hazr, pz      |
|           20 |     3313 | 2024-04-10 | Rooster     | W   | 0.357      | 0.333        | 0.009 (0.001)    | 0.310 (0.037)    | 0 (0.000) |     6.10 | ADDICT, BRACE, damyo, hazr, pz      |
|           19 |     3323 | 2024-04-10 | Rooster     | L   | 0.357      | -            | -                | -                | -         |    -5.25 | ADDICT, BRACE, damyo, hazr, pz      |
|           18 |     3548 | 2024-04-03 | DXA         | W   | 0.310      | 0.333        | 0.002 (0.000)    | 0.240 (0.025)    | 0 (0.000) |     3.93 | ADDICT, BRACE, damyo, hazr, pz      |
|           17 |     3552 | 2024-04-03 | DXA         | W   | 0.310      | 0.333        | 0.002 (0.000)    | 0.240 (0.025)    | 0 (0.000) |     4.03 | ADDICT, BRACE, damyo, hazr, pz      |
|           16 |     3672 | 2024-03-27 | Mindfreak   | L   | 0.264      | -            | -                | -                | -         |    -5.21 | ADDICT, BRACE, damyo, hazr, pz      |
|           15 |     3679 | 2024-03-27 | Mindfreak   | W   | 0.264      | 0.333        | 0.003 (0.000)    | 0.037 (0.003)    | 0 (0.000) |     3.15 | ADDICT, BRACE, damyo, hazr, pz      |
|           14 |     3722 | 2024-03-23 | DXA         | W   | 0.237      | 0.315        | 0.002 (0.000)    | 0.240 (0.018)    | 1 (0.237) |     3.17 | ADDICT, BRACE, damyo, hazr, pz      |
|           13 |     3725 | 2024-03-23 | VexX        | W   | 0.237      | 0.315        | -                | 0.009 (0.001)    | 1 (0.237) |     2.56 | ADDICT, BRACE, damyo, hazr, pz      |
|           12 |     3783 | 2024-03-20 | Canon Event | W   | 0.217      | -            | -                | -                | 0 (0.000) |     1.53 | ADDICT, BRACE, damyo, hazr, pz      |
|           11 |     3784 | 2024-03-20 | Canon Event | W   | 0.216      | -            | -                | -                | -         |     1.55 | ADDICT, BRACE, damyo, hazr, pz      |
|           10 |     3854 | 2024-03-16 | Gods Reign  | L   | 0.190      | -            | -                | -                | -         |    -2.91 | ADDICT, BRACE, hazr, pz, yourwombat |
|            9 |     3875 | 2024-03-15 | GRDX        | W   | 0.183      | 0.432        | 0.001 (0.000)    | -                | 1 (0.183) |     1.42 | ADDICT, BRACE, hazr, pz, yourwombat |
|            8 |     3908 | 2024-03-14 | Aurora      | L   | 0.177      | -            | -                | -                | -         |    -0.04 | ADDICT, BRACE, hazr, pz, yourwombat |
|            7 |     4120 | 2024-03-06 | Vantage     | W   | 0.124      | 0.333        | 0.002 (0.000)    | 0.049 (0.002)    | -         |     1.48 | ADDICT, BRACE, damyo, hazr, pz      |
|            6 |     4122 | 2024-03-06 | Vantage     | W   | 0.124      | 0.333        | 0.002 (0.000)    | 0.049 (0.002)    | -         |     1.49 | ADDICT, BRACE, damyo, hazr, pz      |
|            5 |     4376 | 2024-02-22 | Rooster     | L   | 0.043      | -            | -                | -                | -         |    -0.62 | ADDICT, BRACE, Hatz, hazr, pz       |
|            4 |     4395 | 2024-02-22 | Vantage     | W   | 0.037      | -            | -                | -                | -         |     0.45 | ADDICT, BRACE, Hatz, hazr, pz       |
|            3 |     4397 | 2024-02-21 | FlyQuest    | L   | 0.036      | -            | -                | -                | -         |    -0.14 | ADDICT, BRACE, Hatz, hazr, pz       |
|            2 |     4422 | 2024-02-21 | FlyQuest    | L   | 0.031      | -            | -                | -                | -         |    -0.12 | ADDICT, BRACE, Hatz, hazr, pz       |
|            1 |     4426 | 2024-02-21 | FlyQuest    | L   | 0.031      | -            | -                | -                | -         |    -0.12 | ADDICT, BRACE, Hatz, hazr, pz       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,539.79)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.757 | $1,050.00      | $794.70         |
| 2024-05-12 |      0.572 | $3,500.00      | $2,003.71       |
| 2024-03-23 |      0.237 | $3,308.00      | $784.97         |
| 2024-03-16 |      0.191 | $5,000.00      | $956.41         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
