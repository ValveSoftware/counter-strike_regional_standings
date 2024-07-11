### Roster Details<br />
Team Name: ex-Sprout<br />
Roster: cej0t, podi, raalz, reiko, Sdaim<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [186](../standings_global.md)<br />
Regional Rank: [117]( ../standings_europe.md)<br />
Final Rank Value:  558.6<br />
<br />
Final Rank Value (558.6) = Starting Rank Value (544.4) + Head To Head Adjustments (14.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.268[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 544.4
- 400 + ( ( 0.068 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 544.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     2450 | 2024-03-28 | Rebels          | L   | 0.500      | -            | -                | -                | -         |    -0.82 | cej0t, podi, raalz, reiko, Sdaim     |
|           16 |     2524 | 2024-03-25 | ALTERNATE aTTaX | L   | 0.480      | -            | -                | -                | -         |    -1.01 | cej0t, podi, raalz, reiko, Sdaim     |
|           15 |     2554 | 2024-03-22 | Aurora          | L   | 0.460      | -            | -                | -                | -         |    -0.03 | cej0t, podi, raalz, reiko, Sdaim     |
|           14 |     2625 | 2024-03-19 | B8              | L   | 0.439      | -            | -                | -                | -         |    -0.45 | cej0t, podi, raalz, reiko, Sdaim     |
|           13 |     2910 | 2024-03-07 | Alliance        | L   | 0.359      | -            | -                | -                | -         |    -1.40 | cej0t, raalz, reiko, Sdaim, sL1m3    |
|           12 |     2975 | 2024-03-05 | KOI             | L   | 0.347      | -            | -                | -                | -         |    -0.33 | cej0t, raalz, reiko, Sdaim, sL1m3    |
|           11 |     3018 | 2024-03-03 | BetBoom         | L   | 0.333      | -            | -                | -                | -         |    -0.03 | Buzz, cej0t, raalz, reiko, sL1m3     |
|           10 |     3486 | 2024-02-11 | Metizport       | L   | 0.193      | -            | -                | -                | -         |    -0.57 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            9 |     3512 | 2024-02-09 | fnatic          | W   | 0.179      | 0.143        | 0.298 (0.008)    | 0.623 (0.016)    | 0 (0.000) |     5.64 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            8 |     3513 | 2024-02-09 | 3DMAX           | W   | 0.179      | 0.143        | 0.205 (0.005)    | 1.000 (0.026)    | 0 (0.000) |     5.52 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            7 |     3533 | 2024-02-07 | Metizport       | L   | 0.166      | -            | -                | -                | -         |    -0.49 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            6 |     3684 | 2024-01-31 | ex-Preasy       | L   | 0.119      | -            | -                | -                | -         |    -0.56 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            5 |     3695 | 2024-01-30 | Nemiga          | L   | 0.114      | -            | -                | -                | -         |    -0.06 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            4 |     3703 | 2024-01-30 | Czech Republic  | W   | 0.113      | 0.143        | 0.104 (0.002)    | 0.493 (0.008)    | 0 (0.000) |     3.49 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            3 |     3706 | 2024-01-30 | ALTERNATE aTTaX | L   | 0.112      | -            | -                | -                | -         |    -0.19 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            2 |     3711 | 2024-01-29 | Imperial fe     | W   | 0.105      | 0.143        | 0.195 (0.003)    | 0.347 (0.005)    | 0 (0.000) |     3.20 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |
|            1 |     3760 | 2024-01-26 | ex-Preasy       | W   | 0.085      | 0.371        | 0.030 (0.001)    | 0.228 (0.007)    | 0 (0.000) |     2.28 | Anlelele, cej0t, raalz, Sdaim, sL1m3 |

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
