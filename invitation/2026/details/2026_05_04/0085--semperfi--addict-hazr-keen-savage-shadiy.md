### Roster Details<br />
Team Name: SemperFi<br />
Roster: ADDICT, hazr, keen, SaVage, shadiy<br />
Global Rank: [85](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_05_04.md)<br />
Regional Rank: [8]( ../../standings_asia_2026_05_04.md)<br />
<br />
Final Rank Value:  1120.2<br />
<br />
Final Rank Value (1120.2) = Starting Rank Value (1160.8) + Head To Head Adjustments (-40.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.367[<sup>1</sup>](#table2)
- Bounty Collected: 0.320[<sup>2</sup>](#table1)
- Opponent Network: 0.102[<sup>2</sup>](#table1)
- LAN Wins: 0.852[<sup>2</sup>](#table1)

The average of these factors is 0.410<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1160.8
- 400 + ( ( 0.410 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 1160.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |      944 | 2026-04-03 | Rare Atom         | L   | 0.997      | -            | -                | -                | -         |   -18.20 | ADDICT, hazr, keen, SaVage, shadiy |
|           41 |     1131 | 2026-04-01 | FlyQuest          | L   | 0.983      | -            | -                | -                | -         |   -15.29 | ADDICT, hazr, keen, SaVage, shadiy |
|           40 |     1215 | 2026-04-01 | TYLOO             | W   | 0.978      | 0.354        | 0.105 (0.036)    | 0.447 (0.155)    | 1 (0.978) |    25.53 | ADDICT, hazr, keen, SaVage, shadiy |
|           39 |     1539 | 2026-03-28 | Just Swing        | W   | 0.952      | 0.320        | -                | 0.340 (0.103)    | -         |     4.39 | ADDICT, hazr, keen, SaVage, shadiy |
|           38 |     1544 | 2026-03-27 | XDM               | W   | 0.950      | -            | -                | -                | -         |     0.87 | ADDICT, hazr, keen, SaVage, shadiy |
|           37 |     1587 | 2026-03-27 | Rooster           | W   | 0.945      | 0.278        | 0.010 (0.003)    | 0.426 (0.112)    | -         |     5.60 | ADDICT, hazr, keen, SaVage, shadiy |
|           36 |     1679 | 2026-03-25 | Ground Zero       | W   | 0.932      | 0.278        | 0.015 (0.004)    | -                | -         |     7.74 | ADDICT, hazr, keen, SaVage, shadiy |
|           35 |     1810 | 2026-03-23 | Rooster           | W   | 0.919      | 0.278        | 0.010 (0.002)    | 0.426 (0.109)    | -         |     4.76 | ADDICT, hazr, keen, SaVage, shadiy |
|           34 |     1913 | 2026-03-21 | Muttley Crew      | W   | 0.906      | -            | -                | -                | -         |     0.95 | ADDICT, hazr, keen, SaVage, shadiy |
|           33 |     2112 | 2026-03-17 | THUNDER dOWNUNDER | L   | 0.878      | -            | -                | -                | -         |   -10.30 | ADDICT, hazr, keen, SaVage, shadiy |
|           32 |     2114 | 2026-03-16 | Arcade            | W   | 0.877      | 0.328        | -                | 0.301 (0.087)    | 1 (0.877) |     4.56 | ADDICT, hazr, keen, SaVage, shadiy |
|           31 |     2116 | 2026-03-16 | THUNDER dOWNUNDER | L   | 0.876      | -            | -                | -                | -         |   -10.89 | ADDICT, hazr, keen, SaVage, shadiy |
|           30 |     2122 | 2026-03-16 | Ground Zero       | W   | 0.875      | 0.328        | 0.015 (0.004)    | -                | 1 (0.875) |     7.46 | ADDICT, hazr, keen, SaVage, shadiy |
|           29 |     2163 | 2026-03-15 | Mindfreak         | W   | 0.870      | 0.328        | 0.009 (0.002)    | -                | 1 (0.870) |     6.40 | ADDICT, hazr, keen, SaVage, shadiy |
|           28 |     2166 | 2026-03-15 | Arcade            | W   | 0.869      | 0.328        | -                | 0.301 (0.086)    | 1 (0.869) |     3.88 | ADDICT, hazr, keen, SaVage, shadiy |
|           27 |     2198 | 2026-03-15 | THUNDER dOWNUNDER | L   | 0.864      | -            | -                | -                | -         |   -11.24 | ADDICT, hazr, keen, SaVage, shadiy |
|           26 |     2242 | 2026-03-13 | THUNDER dOWNUNDER | W   | 0.857      | 0.351        | 0.037 (0.011)    | 0.332 (0.100)    | 1 (0.857) |    15.95 | ADDICT, hazr, keen, SaVage, shadiy |
|           25 |     2244 | 2026-03-13 | Ground Zero       | W   | 0.856      | 0.351        | 0.015 (0.004)    | -                | 1 (0.856) |     7.62 | ADDICT, hazr, keen, SaVage, shadiy |
|           24 |     2295 | 2026-03-12 | Mindfreak         | W   | 0.850      | 0.351        | 0.009 (0.003)    | -                | 1 (0.850) |     7.11 | ADDICT, hazr, keen, SaVage, shadiy |
|           23 |     2299 | 2026-03-12 | Skele             | W   | 0.849      | -            | -                | -                | 1 (0.849) |     0.57 | ADDICT, hazr, keen, SaVage, shadiy |
|           22 |     2788 | 2026-03-03 | Liquid            | L   | 0.787      | -            | -                | -                | -         |    -5.99 | ADDICT, hazr, keen, SaVage, shadiy |
|           21 |     2836 | 2026-03-02 | 3DMAX             | L   | 0.779      | -            | -                | -                | -         |    -1.23 | ADDICT, hazr, keen, SaVage, shadiy |
|           20 |     2886 | 2026-03-01 | PARIVISION        | L   | 0.772      | -            | -                | -                | -         |    -0.38 | ADDICT, hazr, keen, SaVage, shadiy |
|           19 |     4300 | 2026-01-25 | Alliance          | L   | 0.539      | -            | -                | -                | -         |    -2.54 | ADDICT, hazr, keen, SaVage, shadiy |
|           18 |     4311 | 2026-01-24 | HAVU              | L   | 0.534      | -            | -                | -                | -         |   -10.19 | ADDICT, hazr, keen, SaVage, shadiy |
|           17 |     4336 | 2026-01-24 | Lilmix            | W   | 0.532      | 0.333        | -                | 0.516 (0.092)    | 1 (0.532) |     6.64 | ADDICT, hazr, keen, SaVage, shadiy |
|           16 |     4376 | 2026-01-23 | INFURITY          | W   | 0.526      | -            | -                | -                | -         |     0.39 | ADDICT, hazr, keen, SaVage, shadiy |
|           15 |     4379 | 2026-01-23 | EXEN              | W   | 0.526      | -            | -                | -                | -         |     0.32 | ADDICT, hazr, keen, SaVage, shadiy |
|           14 |     4386 | 2026-01-23 | Johnny Speeds     | L   | 0.526      | -            | -                | -                | -         |    -3.64 | ADDICT, hazr, keen, SaVage, shadiy |
|           13 |     4604 | 2026-01-16 | megoshort         | L   | 0.482      | -            | -                | -                | -         |   -10.79 | ADDICT, hazr, keen, SaVage, shadiy |
|           12 |     4615 | 2026-01-16 | Sashi             | L   | 0.481      | -            | -                | -                | -         |    -5.45 | ADDICT, hazr, keen, SaVage, shadiy |
|           11 |     4630 | 2026-01-16 | HEROIC Academy    | L   | 0.480      | -            | -                | -                | -         |    -9.94 | ADDICT, hazr, keen, SaVage, shadiy |
|           10 |     4641 | 2026-01-16 | Hemmaplan         | W   | 0.479      | -            | -                | -                | -         |     0.25 | ADDICT, hazr, keen, SaVage, shadiy |
|            9 |     4646 | 2026-01-16 | Tricked           | W   | 0.479      | 0.338        | 0.027 (0.004)    | 0.545 (0.088)    | -         |    10.97 | ADDICT, hazr, keen, SaVage, shadiy |
|            8 |     4653 | 2026-01-16 | megoshort         | L   | 0.479      | -            | -                | -                | -         |   -10.99 | ADDICT, hazr, keen, SaVage, shadiy |
|            7 |     4788 | 2026-01-04 | OlyBet            | L   | 0.401      | -            | -                | -                | -         |    -9.53 | ADDICT, hazr, keen, SaVage, shadiy |
|            6 |     4790 | 2026-01-04 | ALGO              | L   | 0.401      | -            | -                | -                | -         |    -9.68 | ADDICT, hazr, keen, SaVage, shadiy |
|            5 |     4795 | 2026-01-04 | EC BANGA          | L   | 0.400      | -            | -                | -                | -         |   -11.36 | ADDICT, hazr, keen, SaVage, shadiy |
|            4 |     4800 | 2026-01-04 | MOUZ NXT          | L   | 0.400      | -            | -                | -                | -         |    -6.79 | ADDICT, hazr, keen, SaVage, shadiy |
|            3 |     4806 | 2026-01-04 | CSDIILIT          | W   | 0.400      | 0.314        | -                | 0.693 (0.087)    | -         |     1.51 | ADDICT, hazr, keen, SaVage, shadiy |
|            2 |     5698 | 2025-11-13 | Rooster           | W   | 0.052      | -            | -                | -                | -         |     0.06 | ADDICT, hazr, keen, SaVage, shadiy |
|            1 |     5760 | 2025-11-11 | Ground Zero       | W   | 0.039      | -            | -                | -                | -         |     0.28 | ADDICT, hazr, keen, SaVage, shadiy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,814.91)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-27 |      0.945 | $1,500.00      | $1,417.79       |
| 2026-03-17 |      0.878 | $2,124.00      | $1,864.28       |
| 2026-03-15 |      0.864 | $3,531.00      | $3,052.31       |
| 2026-03-05 |      0.801 | $3,000.00      | $2,402.29       |
| 2025-11-13 |      0.052 | $1,500.00      | $78.23          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
