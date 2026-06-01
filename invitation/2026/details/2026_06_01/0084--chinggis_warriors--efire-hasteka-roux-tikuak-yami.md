### Roster Details<br />
Team Name: Chinggis Warriors<br />
Roster: Efire, hasteka, ROUX, tikuak, yAmi<br />
Global Rank: [84](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [9]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  1110.3<br />
<br />
Final Rank Value (1110.3) = Starting Rank Value (1166.7) + Head To Head Adjustments (-56.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.364[<sup>1</sup>](#table2)
- Bounty Collected: 0.326[<sup>2</sup>](#table1)
- Opponent Network: 0.132[<sup>2</sup>](#table1)
- LAN Wins: 0.788[<sup>2</sup>](#table1)

The average of these factors is 0.402<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1166.7
- 400 + ( ( 0.402 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1166.7


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
|           49 |      635 | 2026-05-13 | 5star           | L   | 1.000      | -            | -                | -                | -         |   -13.00 | Efire, hasteka, ROUX, tikuak, yAmi   |
|           48 |      646 | 2026-05-12 | Ground Zero     | W   | 1.000      | 0.548        | 0.008 (0.005)    | 0.256 (0.140)    | 1 (1.000) |     8.91 | Efire, hasteka, ROUX, tikuak, yAmi   |
|           47 |      686 | 2026-05-11 | JiJieHao        | L   | 1.000      | -            | -                | -                | -         |    -8.08 | Efire, hasteka, ROUX, tikuak, yAmi   |
|           46 |      723 | 2026-05-11 | NEXVOID         | W   | 1.000      | 0.548        | 0.013 (0.007)    | 0.408 (0.223)    | 1 (1.000) |    16.87 | Efire, hasteka, ROUX, tikuak, yAmi   |
|           45 |      938 | 2026-05-02 | TYLOO           | L   | 1.000      | -            | -                | -                | -         |    -5.68 | Efire, hasteka, ROUX, tikuak, yAmi   |
|           44 |      997 | 2026-05-01 | NEXVOID         | L   | 0.993      | -            | -                | -                | -         |   -14.38 | Efire, hasteka, ROUX, tikuak, yAmi   |
|           43 |     1085 | 2026-04-29 | TYLOO           | W   | 0.980      | 0.333        | 0.094 (0.031)    | 0.530 (0.173)    | -         |    25.15 | Efire, hasteka, ROUX, tikuak, yAmi   |
|           42 |     1169 | 2026-04-27 | Just Swing      | W   | 0.966      | 0.333        | -                | 0.296 (0.095)    | -         |     4.83 | Efire, hasteka, ROUX, tikuak, yAmi   |
|           41 |     1233 | 2026-04-26 | Legion          | W   | 0.960      | -            | -                | -                | -         |     2.89 | Efire, hasteka, ROUX, tikuak, yAmi   |
|           40 |     1684 | 2026-04-09 | FengDa          | L   | 0.846      | -            | -                | -                | -         |   -20.70 | cool4st, Efire, Redka, ROUX, tikuak  |
|           39 |     1705 | 2026-04-08 | NEXVOID         | W   | 0.840      | 0.333        | 0.013 (0.004)    | 0.408 (0.114)    | -         |    13.67 | cool4st, Efire, Redka, ROUX, tikuak  |
|           38 |     1738 | 2026-04-07 | FengDa          | L   | 0.833      | -            | -                | -                | -         |   -21.07 | cool4st, Efire, Redka, ROUX, tikuak  |
|           37 |     1829 | 2026-04-05 | NSN             | W   | 0.819      | -            | -                | -                | -         |     1.25 | cool4st, Efire, Redka, ROUX, tikuak  |
|           36 |     1851 | 2026-04-04 | TYLOO           | L   | 0.817      | -            | -                | -                | -         |    -4.68 | cool4st, Efire, ligroo, ROUX, tikuak |
|           35 |     1920 | 2026-04-04 | FlyQuest        | L   | 0.812      | -            | -                | -                | -         |   -13.41 | cool4st, Efire, ligroo, ROUX, tikuak |
|           34 |     1982 | 2026-04-03 | Arise           | W   | 0.806      | -            | -                | -                | -         |     1.47 | cool4st, Efire, Redka, ROUX, tikuak  |
|           33 |     2080 | 2026-04-02 | 5star           | W   | 0.800      | 0.333        | 0.023 (0.006)    | 0.395 (0.105)    | -         |    13.54 | cool4st, Efire, Redka, ROUX, tikuak  |
|           32 |     2116 | 2026-04-01 | The Huns        | W   | 0.797      | 0.354        | 0.045 (0.013)    | 0.454 (0.128)    | 1 (0.797) |    14.37 | cool4st, Efire, ligroo, ROUX, tikuak |
|           31 |     2189 | 2026-04-01 | The Huns        | L   | 0.792      | -            | -                | -                | -         |   -11.12 | cool4st, Efire, ligroo, ROUX, tikuak |
|           30 |     2204 | 2026-03-31 | Rare Atom       | W   | 0.791      | 0.354        | 0.010 (0.003)    | -                | 1 (0.791) |    11.46 | cool4st, Efire, ligroo, ROUX, tikuak |
|           29 |     2261 | 2026-03-31 | VTM             | W   | 0.786      | -            | -                | -                | -         |     0.46 | cool4st, Efire, ligroo, ROUX, tikuak |
|           28 |     2284 | 2026-03-31 | NEXVOID         | L   | 0.785      | -            | -                | -                | -         |   -12.75 | cool4st, Efire, ligroo, ROUX, tikuak |
|           27 |     2522 | 2026-03-28 | UR              | W   | 0.765      | -            | -                | -                | -         |     0.45 | cool4st, Efire, ligroo, ROUX, tikuak |
|           26 |     2527 | 2026-03-28 | Nas             | W   | 0.765      | -            | -                | -                | -         |     0.89 | cool4st, Efire, ligroo, ROUX, tikuak |
|           25 |     2843 | 2026-03-22 | BMZ             | W   | 0.725      | -            | -                | -                | 1 (0.725) |     7.64 | cool4st, Efire, ligroo, ROUX, tikuak |
|           24 |     2890 | 2026-03-21 | The QUBE        | L   | 0.720      | -            | -                | -                | -         |   -19.52 | cool4st, Efire, Redka, ROUX, tikuak  |
|           23 |     2905 | 2026-03-21 | BMZ             | W   | 0.718      | -            | -                | -                | 1 (0.718) |     6.67 | cool4st, Efire, ligroo, ROUX, tikuak |
|           22 |     2954 | 2026-03-20 | NSN             | L   | 0.713      | -            | -                | -                | -         |   -21.70 | cool4st, Efire, ligroo, ROUX, tikuak |
|           21 |     3007 | 2026-03-19 | NEXVOID         | W   | 0.705      | -            | -                | -                | 1 (0.705) |    10.37 | cool4st, Efire, ligroo, ROUX, tikuak |
|           20 |     3011 | 2026-03-18 | The Huns        | L   | 0.703      | -            | -                | -                | -         |    -9.35 | cool4st, Efire, ligroo, ROUX, tikuak |
|           19 |     3083 | 2026-03-17 | 5star           | W   | 0.693      | 0.308        | 0.023 (0.005)    | -                | 1 (0.693) |    12.87 | cool4st, Efire, ligroo, ROUX, tikuak |
|           18 |     3092 | 2026-03-17 | 100RA           | W   | 0.692      | -            | -                | -                | 1 (0.692) |     0.34 | cool4st, Efire, ligroo, ROUX, tikuak |
|           17 |     3141 | 2026-03-16 | 5star           | L   | 0.685      | -            | -                | -                | -         |    -8.92 | cool4st, Efire, ligroo, ROUX, tikuak |
|           16 |     3318 | 2026-03-12 | Lynn Vision     | L   | 0.659      | -            | -                | -                | -         |    -4.51 | cool4st, Efire, ligroo, ROUX, tikuak |
|           15 |     3335 | 2026-03-12 | TYLOO           | L   | 0.658      | -            | -                | -                | -         |    -3.30 | cool4st, Efire, ligroo, ROUX, tikuak |
|           14 |     3369 | 2026-03-11 | Alter Ego       | W   | 0.651      | 0.769        | -                | 0.223 (0.111)    | -         |     4.56 | cool4st, Efire, ligroo, ROUX, tikuak |
|           13 |     3476 | 2026-03-09 | FlyQuest        | W   | 0.638      | 0.769        | 0.019 (0.009)    | 0.268 (0.131)    | -         |     9.13 | cool4st, Efire, ligroo, ROUX, tikuak |
|           12 |     3487 | 2026-03-08 | Change The Game | W   | 0.637      | 0.769        | -                | 0.196 (0.096)    | -         |     3.89 | cool4st, Efire, ligroo, ROUX, tikuak |
|           11 |     3918 | 2026-02-28 | The Huns        | L   | 0.578      | -            | -                | -                | -         |    -7.22 | cool4st, Efire, ligroo, ROUX, tikuak |
|           10 |     3921 | 2026-02-27 | BMZ             | W   | 0.577      | -            | -                | -                | 1 (0.577) |     4.97 | cool4st, Efire, ligroo, ROUX, tikuak |
|            9 |     3972 | 2026-02-26 | NEXVOID         | W   | 0.571      | -            | -                | -                | -         |     8.53 | cool4st, Efire, ligroo, ROUX, tikuak |
|            8 |     4005 | 2026-02-26 | The Huns        | L   | 0.567      | -            | -                | -                | -         |    -7.96 | cool4st, Efire, ligroo, ROUX, tikuak |
|            7 |     4032 | 2026-02-26 | The Huns        | L   | 0.565      | -            | -                | -                | -         |    -8.35 | cool4st, Efire, ligroo, ROUX, tikuak |
|            6 |     4039 | 2026-02-26 | Lynn Vision     | L   | 0.565      | -            | -                | -                | -         |    -3.41 | cool4st, Efire, ligroo, ROUX, tikuak |
|            5 |     4278 | 2026-02-21 | Change The Game | L   | 0.533      | -            | -                | -                | -         |   -14.13 | cool4st, Efire, Redka, ROUX, tikuak  |
|            4 |     4327 | 2026-02-20 | Last Bullet     | L   | 0.527      | -            | -                | -                | -         |   -12.43 | cool4st, Efire, Redka, ROUX, tikuak  |
|            3 |     4433 | 2026-02-18 | 5star           | W   | 0.513      | 0.333        | 0.023 (0.004)    | -                | -         |     9.31 | cool4st, Efire, Redka, ROUX, tikuak  |
|            2 |     5368 | 2026-01-23 | FlyQuest        | L   | 0.339      | -            | -                | -                | -         |    -6.69 | cool4st, Efire, ROUX, tikuak, yAmi   |
|            1 |     5584 | 2026-01-17 | Change The Game | W   | 0.298      | -            | -                | -                | -         |     1.39 | cool4st, Efire, ROUX, tikuak, yAmi   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,222.46)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-17 |      1.000 | $3,000.00      | $3,000.00       |
| 2026-05-03 |      1.000 | $1,500.00      | $1,500.00       |
| 2026-04-09 |      0.846 | $2,500.00      | $2,115.66       |
| 2026-04-05 |      0.818 | $2,250.00      | $1,840.47       |
| 2026-03-22 |      0.725 | $2,521.00      | $1,827.88       |
| 2026-02-28 |      0.578 | $750.00        | $433.46         |
| 2026-01-25 |      0.352 | $1,433.00      | $504.99         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
