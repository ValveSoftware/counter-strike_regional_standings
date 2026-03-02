### Roster Details<br />
Team Name: MIBR Academy<br />
Roster: brn$, fl4sh, lkz, perez, stormzyn<br />
Global Rank: [308](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_02.md)<br />
Regional Rank: [86]( ../../standings_americas_2026_03_02.md)<br />
<br />
Final Rank Value:  491.1<br />
<br />
Final Rank Value (491.1) = Starting Rank Value (500.7) + Head To Head Adjustments (-9.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.208[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 500.7
- 400 + ( ( 0.053 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 500.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     2908 | 2025-11-07 | Yawara      | L   | 0.433      | -            | -                | -                | -         |    -1.97 | brn$, fl4sh, lkz, perez, stormzyn    |
|           14 |     2925 | 2025-11-07 | Four Magic  | L   | 0.433      | -            | -                | -                | -         |    -6.13 | brn$, fl4sh, lkz, perez, stormzyn    |
|           13 |     2951 | 2025-11-07 | RED Canids  | L   | 0.432      | -            | -                | -                | -         |    -0.17 | brn$, fl4sh, lkz, perez, stormzyn    |
|           12 |     3005 | 2025-11-06 | Vasco       | L   | 0.426      | -            | -                | -                | -         |    -3.39 | brn$, fl4sh, lkz, perez, stormzyn    |
|           11 |     3050 | 2025-11-04 | LP          | L   | 0.415      | -            | -                | -                | -         |    -2.37 | brn$, fl4sh, lkz, perez, stormzyn    |
|           10 |     3364 | 2025-10-25 | Bad Luck    | L   | 0.348      | -            | -                | -                | -         |    -4.75 | fl4sh, lkz, perez, proSHOW, stormzyn |
|            9 |     3481 | 2025-10-23 | Yawara      | L   | 0.335      | -            | -                | -                | -         |    -1.54 | fl4sh, lkz, perez, proSHOW, stormzyn |
|            8 |     3636 | 2025-10-16 | Sharks      | L   | 0.288      | -            | -                | -                | -         |    -0.06 | brn$, fl4sh, lkz, perez, stormzyn    |
|            7 |     3742 | 2025-10-13 | GameHunters | W   | 0.268      | 0.371        | 0.000 (0.000)    | 0.054 (0.005)    | 0 (0.000) |     4.29 | brn$, fl4sh, lkz, perez, stormzyn    |
|            6 |     3753 | 2025-10-12 | Procyon     | W   | 0.261      | 0.371        | 0.017 (0.002)    | 0.217 (0.021)    | 0 (0.000) |     7.37 | brn$, fl4sh, lkz, perez, stormzyn    |
|            5 |     3795 | 2025-10-10 | LP          | L   | 0.248      | -            | -                | -                | -         |    -1.44 | brn$, fl4sh, lkz, perez, stormzyn    |
|            4 |     3844 | 2025-10-09 | Yawara      | L   | 0.241      | -            | -                | -                | -         |    -1.09 | brn$, fl4sh, lkz, perez, stormzyn    |
|            3 |     3943 | 2025-10-07 | LP          | L   | 0.228      | -            | -                | -                | -         |    -1.36 | brn$, fl4sh, lkz, perez, stormzyn    |
|            2 |     3973 | 2025-10-07 | Crashers    | W   | 0.226      | 0.371        | 0.000 (0.000)    | 0.225 (0.019)    | 0 (0.000) |     3.97 | brn$, fl4sh, lkz, perez, stormzyn    |
|            1 |     4060 | 2025-10-05 | Yawara      | L   | 0.215      | -            | -                | -                | -         |    -0.97 | brn$, card, lkz, perez, stormzyn     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
