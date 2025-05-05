### Roster Details<br />
Team Name: Sangal<br />
Roster: Blytz, bnox, danistzz, maaryy, mASKED<br />
Global Rank: [123](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [76]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  685.3<br />
<br />
Final Rank Value (685.3) = Starting Rank Value (666.3) + Head To Head Adjustments (19.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.278[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.059[<sup>2</sup>](#table1)
- LAN Wins: 0.022[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 666.3
- 400 + ( ( 0.147 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 666.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      158 | 2025-04-22 | Sashi     | L   | 1.000      | -            | -                | -                | -         |   -10.07 | Blytz, bnox, danistzz, maaryy, mASKED |
|           14 |      185 | 2025-04-20 | ECSTATIC  | L   | 1.000      | -            | -                | -                | -         |    -7.65 | Blytz, bnox, danistzz, maaryy, mASKED |
|           13 |      251 | 2025-04-17 | Monte     | W   | 1.000      | 0.435        | 0.005 (0.002)    | 0.493 (0.214)    | 0 (0.000) |    18.73 | Blytz, bnox, danistzz, maaryy, mASKED |
|           12 |      302 | 2025-04-15 | TNL       | L   | 1.000      | -            | -                | -                | -         |    -4.68 | Blytz, bnox, danistzz, maaryy, mASKED |
|           11 |      363 | 2025-04-12 | Fire Flux | W   | 1.000      | 0.435        | 0.002 (0.001)    | 0.751 (0.326)    | 0 (0.000) |    21.32 | Blytz, bnox, danistzz, maaryy, mASKED |
|           10 |      699 | 2025-03-29 | Monte     | L   | 0.952      | -            | -                | -                | -         |   -11.10 | Blytz, bnox, danistzz, maaryy, mASKED |
|            9 |      755 | 2025-03-28 | Leo       | W   | 0.946      | 0.143        | 0.005 (0.001)    | 0.368 (0.050)    | 0 (0.000) |    16.53 | Blytz, bnox, danistzz, maaryy, mASKED |
|            8 |      804 | 2025-03-27 | Metizport | L   | 0.941      | -            | -                | -                | -         |    -5.59 | Blytz, bnox, danistzz, maaryy, mASKED |
|            7 |     3161 | 2024-11-16 | Partizan  | L   | 0.067      | -            | -                | -                | -         |    -0.29 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|            6 |     3192 | 2024-11-15 | Mindfreak | W   | 0.059      | 0.617        | 0.006 (0.000)    | 0.031 (0.001)    | 1 (0.059) |     0.83 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|            5 |     3198 | 2024-11-15 | PCIFIC    | W   | 0.059      | 0.617        | 0.000 (0.000)    | 0.089 (0.003)    | 1 (0.059) |     0.79 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|            4 |     3211 | 2024-11-14 | Metizport | L   | 0.054      | -            | -                | -                | -         |    -0.29 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|            3 |     3259 | 2024-11-13 | Canada    | W   | 0.046      | 0.617        | 0.000 (0.000)    | 0.002 (0.000)    | 1 (0.046) |     0.36 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|            2 |     3264 | 2024-11-13 | Norway    | W   | 0.046      | 0.617        | 0.000 (0.000)    | 0.008 (0.000)    | 1 (0.046) |     0.39 | bnox, fr3nd, maaryy, mASKED, tomiko   |
|            1 |     3390 | 2024-11-08 | Rebels    | L   | 0.013      | -            | -                | -                | -         |    -0.24 | bnox, fr3nd, maaryy, mASKED, tomiko   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($923.25)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-17 |      0.074 | $12,500.00     | $923.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
