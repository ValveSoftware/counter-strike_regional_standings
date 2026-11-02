### Roster Details<br />
Team Name: ALTAY<br />
Roster: ARSPOWER, Blackout, kiytsu, Plain7<br />
Global Rank: [262](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [178]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  615.3<br />
<br />
Final Rank Value (615.3) = Starting Rank Value (628.8) + Head To Head Adjustments (-13.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.256[<sup>1</sup>](#table2)
- Bounty Collected: 0.179[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.053[<sup>2</sup>](#table1)

The average of these factors is 0.122<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 628.8
- 400 + ( ( 0.122 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 628.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3701 | 2026-08-01 | RayRay      | L   | 0.578      | -            | -                | -                | -         |    -9.14 | ARSPOWER, Blackout, kiytsu, nyx, Plain7  |
|            4 |     3709 | 2026-08-01 | DONSTU      | L   | 0.578      | -            | -                | -                | -         |    -6.79 | ARSPOWER, Blackout, kiytsu, nyx, Plain7  |
|            3 |     3929 | 2026-07-25 | DEPO        | L   | 0.532      | -            | -                | -                | -         |    -2.19 | ARSPOWER, Blackout, hase, kiytsu, Plain7 |
|            2 |     3937 | 2026-07-25 | ZWAW        | W   | 0.531      | 0.396        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.531) |     5.83 | ARSPOWER, Blackout, hase, kiytsu, Plain7 |
|            1 |     3946 | 2026-07-24 | Rune Eaters | L   | 0.530      | -            | -                | -                | -         |    -1.19 | ARSPOWER, Blackout, hase, kiytsu, Plain7 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($686.20)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-02 |      0.586 | $250.00        | $146.47         |
| 2026-07-26 |      0.540 | $1,000.00      | $539.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
