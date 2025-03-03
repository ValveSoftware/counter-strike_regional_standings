### Roster Details<br />
Team Name: SUPER EVIL GANG<br />
Roster: arias, DooM, flow, Misha, Talen<br />
Global Rank: [160](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_03.md)<br />
Regional Rank: [42]( ../../standings_americas_2025_03_03.md)<br />
<br />
Final Rank Value:  674.1<br />
<br />
Final Rank Value (674.1) = Starting Rank Value (673.9) + Head To Head Adjustments (0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.324[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 673.9
- 400 + ( ( 0.142 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 673.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |        9 | 2025-03-01 | Marsborne          | L   | 1.000      | -            | -                | -                | -         |    -8.51 | arias, DooM, flow, Misha, Talen             |
|           12 |      380 | 2025-02-10 | Immigrants peek    | L   | 1.000      | -            | -                | -                | -         |   -18.69 | arias, clipzera, Keiti, Misha, Talen        |
|           11 |      414 | 2025-02-09 | vagrants           | L   | 1.000      | -            | -                | -                | -         |   -18.38 | arias, clipzera, flow, Misha, Talen         |
|           10 |      444 | 2025-02-08 | Mythic             | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.026 (0.004)    | 0 (0.000) |     7.01 | arias, clipzera, flow, Misha, Talen         |
|            9 |      872 | 2024-12-15 | Bad News Capybaras | W   | 0.683      | 0.143        | 0.000 (0.000)    | 0.142 (0.014)    | 0 (0.000) |     9.28 | arias, clipzera, Keiti, Misha, Talen        |
|            8 |      896 | 2024-12-14 | LAG                | W   | 0.676      | 0.143        | 0.004 (0.000)    | 0.145 (0.014)    | 0 (0.000) |    11.35 | arias, clipzera, Keiti, Misha, Talen        |
|            7 |      924 | 2024-12-13 | Undone             | L   | 0.670      | -            | -                | -                | -         |    -8.93 | arias, clipzera, Keiti, Misha, Talen        |
|            6 |      993 | 2024-12-08 | Make Your Mind     | L   | 0.636      | -            | -                | -                | -         |   -10.06 | arias, clipzera, flow, Misha, Talen         |
|            5 |     1018 | 2024-12-07 | Chicken Coop       | W   | 0.630      | 0.372        | 0.006 (0.001)    | 0.135 (0.032)    | 0 (0.000) |     8.31 | arias, clipzera, flow, Misha, Talen         |
|            4 |     1047 | 2024-12-06 | Wanted Goons       | W   | 0.623      | 0.372        | 0.004 (0.001)    | 0.133 (0.031)    | 0 (0.000) |    10.00 | arias, clipzera, flow, Misha, Talen         |
|            3 |     1074 | 2024-12-05 | Undone             | W   | 0.617      | 0.372        | 0.002 (0.001)    | 0.232 (0.053)    | 0 (0.000) |    11.05 | arias, clipzera, flow, Misha, Talen         |
|            2 |     1107 | 2024-12-04 | Immigrants peek    | W   | 0.610      | 0.372        | 0.001 (0.000)    | 0.179 (0.041)    | 0 (0.000) |     8.25 | arias, clipzera, flow, Misha, Talen         |
|            1 |     3380 | 2024-09-07 | Wanted Goons       | L   | 0.021      | -            | -                | -                | -         |    -0.49 | arias, Lambchoppington, Locke, Misha, Talen |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,736.28)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.636 | $4,300.00      | $2,736.28       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
