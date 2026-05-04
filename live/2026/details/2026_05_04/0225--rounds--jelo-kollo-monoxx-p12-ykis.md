### Roster Details<br />
Team Name: ROUNDS<br />
Roster: Jelo, Kollo, Monoxx, p12, ykis<br />
Global Rank: [225](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [144]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  713.2<br />
<br />
Final Rank Value (713.2) = Starting Rank Value (709.3) + Head To Head Adjustments (3.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.271[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.203[<sup>2</sup>](#table1)

The average of these factors is 0.167<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 709.3
- 400 + ( ( 0.167 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 709.3


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
|            5 |       35 | 2026-05-02 | Lilmix   | L   | 1.000      | -            | -                | -                | -         |    -9.91 | Jelo, Kollo, Monoxx, p12, ykis |
|            4 |       49 | 2026-05-01 | MTX      | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.065 (0.020)    | 1 (1.000) |    10.93 | Jelo, Kollo, Monoxx, p12, ykis |
|            3 |       53 | 2026-05-01 | G2 Ares  | L   | 1.000      | -            | -                | -                | -         |    -6.31 | Jelo, Kollo, Monoxx, p12, ykis |
|            2 |       54 | 2026-05-01 | SAW      | W   | 1.000      | 0.303        | 0.001 (0.000)    | 0.144 (0.044)    | 1 (1.000) |    20.64 | Jelo, Kollo, Monoxx, p12, ykis |
|            1 |     1563 | 2026-03-27 | Misa     | L   | 0.948      | -            | -                | -                | -         |   -11.45 | Jelo, Kollo, Monoxx, p12, ykis |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($961.25)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.961 | $1,000.00      | $961.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
