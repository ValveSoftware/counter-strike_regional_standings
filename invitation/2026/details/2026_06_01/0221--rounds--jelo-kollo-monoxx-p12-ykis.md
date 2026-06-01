### Roster Details<br />
Team Name: ROUNDS<br />
Roster: Jelo, Kollo, Monoxx, p12, ykis<br />
Global Rank: [221](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [138]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  711.8<br />
<br />
Final Rank Value (711.8) = Starting Rank Value (708.2) + Head To Head Adjustments (3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.256[<sup>1</sup>](#table2)
- Bounty Collected: 0.178[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.204[<sup>2</sup>](#table1)

The average of these factors is 0.162<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 708.2
- 400 + ( ( 0.162 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 708.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      952 | 2026-05-02 | Lilmix   | L   | 0.999      | -            | -                | -                | -         |   -12.60 | Jelo, Kollo, Monoxx, p12, ykis |
|            4 |      969 | 2026-05-01 | MTX      | W   | 0.995      | 0.303        | 0.000 (0.000)    | 0.091 (0.027)    | 1 (0.995) |    12.13 | Jelo, Kollo, Monoxx, p12, ykis |
|            3 |      974 | 2026-05-01 | G2 Ares  | L   | 0.995      | -            | -                | -                | -         |    -5.19 | Jelo, Kollo, Monoxx, p12, ykis |
|            2 |      977 | 2026-05-01 | SAW      | W   | 0.995      | 0.303        | 0.001 (0.000)    | 0.207 (0.062)    | 1 (0.995) |    19.07 | Jelo, Kollo, Monoxx, p12, ykis |
|            1 |     2549 | 2026-03-27 | Misa     | L   | 0.761      | -            | -                | -                | -         |    -9.81 | Jelo, Kollo, Monoxx, p12, ykis |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($774.68)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.775 | $1,000.00      | $774.68         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
