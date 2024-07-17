### Roster Details<br />
Team Name: Latvia<br />
Roster: Frip, keen, prelideN, rud, shadiy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [97](../standings_global.md)<br />
Regional Rank: [70]( ../standings_europe.md)<br />
Final Rank Value:  913.3<br />
<br />
Final Rank Value (913.3) = Starting Rank Value (918.1) + Head To Head Adjustments (-4.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.329[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.331[<sup>2</sup>](#table1)

The average of these factors is 0.241<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 918.1
- 400 + ( ( 0.241 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 918.1


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
|           10 |      125 | 2024-07-14 | ALTERNATE aTTaX | L   | 1.000      | -            | -                | -                | -         |   -16.15 | Frip, keen, prelideN, rud, shadiy    |
|            9 |      186 | 2024-07-10 | Norway          | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.122 (0.017)    | 0 (0.000) |     7.58 | Frip, keen, prelideN, rud, shadiy    |
|            8 |      222 | 2024-07-08 | 3DMAX           | W   | 1.000      | 0.143        | 0.209 (0.030)    | 1.000 (0.143)    | 0 (0.000) |    26.75 | Frip, keen, prelideN, rud, shadiy    |
|            7 |      229 | 2024-07-08 | Kosovo          | L   | 1.000      | -            | -                | -                | -         |   -16.83 | Frip, keen, prelideN, rud, shadiy    |
|            6 |      577 | 2024-06-09 | Esprots         | L   | 0.945      | -            | -                | -                | -         |   -21.31 | Frip, keen, prelideN, raw, shadiy    |
|            5 |      608 | 2024-06-08 | hypewrld        | W   | 0.941      | 0.334        | 0.004 (0.001)    | 0.039 (0.012)    | 1 (0.941) |     6.40 | Frip, keen, prelideN, raw, shadiy    |
|            4 |     1662 | 2024-05-05 | hypewrld        | W   | 0.714      | 0.257        | 0.004 (0.001)    | 0.039 (0.007)    | 1 (0.714) |     5.13 | flairr, Frip, Mairel, rud, shadiy    |
|            3 |     1666 | 2024-05-05 | MightyWolves    | W   | 0.713      | 0.257        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.713) |     1.15 | flairr, Frip, Mairel, rud, shadiy    |
|            2 |     3339 | 2024-02-24 | hypewrld        | W   | 0.241      | 0.262        | 0.004 (0.000)    | 0.039 (0.002)    | 1 (0.241) |     1.77 | EIZA, keen, prelideN, shadiy, shield |
|            1 |     3344 | 2024-02-24 | kloogarand      | W   | 0.240      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.240) |     0.70 | EIZA, keen, prelideN, shadiy, shield |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,217.27)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.946 | $1,340.00      | $1,267.57       |
| 2024-05-05 |      0.714 | $1,077.00      | $768.85         |
| 2024-02-24 |      0.241 | $750.00        | $180.85         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
